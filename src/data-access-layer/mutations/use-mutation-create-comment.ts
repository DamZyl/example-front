import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CreateCommentInput } from '../../api-types/api';
import { commentApi } from '../api-client';
import { MutationKeys } from '../mutation-keys';
import { QueryKeys } from '../query-keys';

export function useMutationCreateComment() {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (createCommentInput?: CreateCommentInput) =>
      commentApi.commentPost(createCommentInput),
    {
      mutationKey: [MutationKeys.CreateCommentMutation],
      onSuccess: () => {
        queryClient.invalidateQueries([QueryKeys.GetComments]);
        console.log('Udało się');
      },
      onError: (error) => {
        console.log(error);
      },
    },
  );
  return mutation;
}

export default useMutationCreateComment;
