import {
  MutationFunction,
  UseMutationOptions,
  UseMutationResult,
  useMutation,
} from '@tanstack/react-query';
import axios from 'axios';
import { handleErrorCode } from '../functions/errors-type-guards';

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
  const mutation: UseMutationResult<TData, TError, TVariables, TContext> =
    useMutation(mutationFn, {
      ...options,
      onError: (error) => {
        if (!axios.isAxiosError(error)) throw Error('Unknown error');

        const errorCode = handleErrorCode(error);

        switch (errorCode) {
          case 400:
            console.log('Toast');
            break;
          case 404:
          case 500:
            console.log('Dialog');
            break;
          default:
            console.log('Error boundary');
            break;
        }
      },
    });

  return mutation;
}
