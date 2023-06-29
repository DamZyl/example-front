import { useMutation } from '@tanstack/react-query';
import { MutationKeys } from '../mutation-keys';
import { commentApi } from '../api-client';

export function useMutationUnhandledException() {
  const mutation = useMutation(
    () => commentApi.commentExceptionUnhandledPost(),
    {
      mutationKey: [MutationKeys.UnhandledException],
      onSuccess: () => {},
    },
  );
  return mutation;
}
