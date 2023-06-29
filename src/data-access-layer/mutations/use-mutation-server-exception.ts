import { useMutation } from '@tanstack/react-query';
import { MutationKeys } from '../mutation-keys';
import { commentApi } from '../api-client';

export function useMutationServerException() {
  const mutation = useMutation(
    () => commentApi.commentExceptionInternalPost(),
    {
      mutationKey: [MutationKeys.ServerException],
      onSuccess: () => {},
      onError: (error) => {
        console.log('ServerException');
      },
    },
  );
  return mutation;
}
