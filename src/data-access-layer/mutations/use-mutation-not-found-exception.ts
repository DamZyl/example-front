import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { MutationKeys } from '../mutation-keys';
import { commentApi } from '../api-client';

export function useMutationNotFoundException() {
  const mutation = useMutation(
    () => commentApi.commentExceptionNotFoundPost(),
    {
      mutationKey: [MutationKeys.NotFoundException],
      onSuccess: () => {},
      onError: () => {
        toast.error('Changed global error handling');
      },
    },
  );
  return mutation;
}
