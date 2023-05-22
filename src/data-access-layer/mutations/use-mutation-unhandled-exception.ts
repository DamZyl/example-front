import { useMutation } from '@tanstack/react-query';
import { MutationKeys } from '../mutation-keys';
import { commentApi } from '../api-client';
import { CreateCommentInput } from '../../api-types';

export function useMutationUnhandledException() {
  const mutation = useMutation(
    (createCommentInput?: CreateCommentInput) =>
      commentApi.commentExceptionUnhandledPost(createCommentInput),
    {
      mutationKey: [MutationKeys.UnhandledException],
      onSuccess: () => {},
      onError: (error) => {},
    },
  );
  return mutation;
}
