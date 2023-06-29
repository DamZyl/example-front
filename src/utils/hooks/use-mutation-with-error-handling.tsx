import {
  MutationFunction,
  UseMutationOptions,
  UseMutationResult,
  useMutation,
} from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import React, { useCallback } from 'react';
import {
  handleErrorCode,
  handleErrorMessage,
} from '../functions/errors-type-guards';
import { useDialogContext } from '../../contexts/dialog-context';
import { CustomDialog } from '../../common-components/custom-dialog/custom-dialog';

export function useMutationWithErrorHandling<
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown,
>(
  mutationFn: MutationFunction<TData, TVariables>,
  options?: Omit<
    UseMutationOptions<TData, TError, TVariables, TContext>,
    'mutationFn'
  >,
) {
  const { handleShowDialog } = useDialogContext();

  const showDialog = useCallback(
    (message: string) => {
      handleShowDialog(<CustomDialog message={message} />);
    },
    [handleShowDialog],
  );

  const mutation: UseMutationResult<TData, TError, TVariables, TContext> =
    useMutation(mutationFn, {
      ...options,
      onError: (error) => {
        if (!axios.isAxiosError(error)) throw Error('Unknown error');

        const errorCode = handleErrorCode(error);
        const errorMessage = handleErrorMessage(error);

        switch (errorCode) {
          case 400:
            toast.error(errorMessage);
            break;
          case 404:
          case 500:
            showDialog(errorMessage);
            break;
          default:
            throw Error(errorMessage);
        }
      },
      useErrorBoundary: (error) => {
        const errorCode = handleErrorCode(error);

        switch (errorCode) {
          case 400:
          case 404:
          case 500:
            return false;
          default:
            return true;
        }
      },
    });

  return mutation;
}
