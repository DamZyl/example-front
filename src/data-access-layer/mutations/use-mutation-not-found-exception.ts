import { useMutation } from '@tanstack/react-query';
import { MutationKeys } from '../mutation-keys';
import { commentApi } from '../api-client';

export function useMutationNotFoundException() {
  const mutation = useMutation(
    () => commentApi.commentExceptionNotFoundPost(),
    {
      mutationKey: [MutationKeys.NotFoundException],
      onSuccess: () => {},
      onError: (error) => {
        console.log('NotFoundException');
      },
    },
  );
  return mutation;
}
