import { useMutation } from '@tanstack/react-query';
import { MutationKeys } from '../mutation-keys';
import { commentApi } from '../api-client';
import { CreateCommentInput } from '../../api-types';

export function useMutationServerException() {
  const mutation = useMutation(
    (createCommentInput?: CreateCommentInput) =>
      commentApi.commentExceptionInternalPost(createCommentInput),
    {
      mutationKey: [MutationKeys.ServerException],
      onSuccess: () => {},
      onError: (error) => {},
    },
  );
  return mutation;
}
