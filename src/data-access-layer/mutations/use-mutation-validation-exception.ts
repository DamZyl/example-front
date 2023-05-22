import { useMutation } from '@tanstack/react-query';
import { MutationKeys } from '../mutation-keys';
import { commentApi } from '../api-client';
import { CreateCommentInput } from '../../api-types';

export function useMutationValidationException() {
  const mutation = useMutation(
    (createCommentInput?: CreateCommentInput) =>
      commentApi.commentExceptionValidationPost(createCommentInput),
    {
      mutationKey: [MutationKeys.ValidationException],
      onSuccess: () => {},
      onError: (error) => {},
    },
  );
  return mutation;
}
