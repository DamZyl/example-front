import { useMutation } from '@tanstack/react-query';
import { MutationKeys } from '../mutation-keys';
import { commentApi } from '../api-client';

export function useMutationValidationException() {
  const mutation = useMutation(
    () => commentApi.commentExceptionValidationPost(),
    {
      mutationKey: [MutationKeys.ValidationException],
      onSuccess: () => {},
      onError: (error) => {
        console.log('ValidationException');
      },
    },
  );
  return mutation;
}
