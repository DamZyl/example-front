import { QueryClient, useMutation } from '@tanstack/react-query';
import { CreateCommentInput } from '../../api-types/api';
import { commentApi } from '../api-client';
import { MutationKeys } from '../mutation-keys';
import { QueryKeys } from '../query-keys';

export function useMutationCreateComment() {
  const queryClient = new QueryClient();

  const mutation = useMutation(
    (createCommentInput?: CreateCommentInput) =>
      commentApi.commentPost(createCommentInput),
    {
      mutationKey: [MutationKeys.CreateCommentMutation],
      onSuccess: () => {
        console.log('Success');
        return queryClient.invalidateQueries([QueryKeys.GetComments]);
      },
    },
  );
  return mutation;
}

export default useMutationCreateComment;
