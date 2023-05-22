import { useMutation } from '@tanstack/react-query';
import { MutationKeys } from '../mutation-keys';
import { commentApi } from '../api-client';
import { CreateCommentInput } from '../../api-types';

export function useMutationNotFoundException() {
  const mutation = useMutation(
    (createCommentInput?: CreateCommentInput) =>
      commentApi.commentExceptionNotFoundPost(createCommentInput),
    {
      mutationKey: [MutationKeys.NotFoundException],
      onSuccess: () => {},
      onError: (error) => {},
    },
  );
  return mutation;
}
