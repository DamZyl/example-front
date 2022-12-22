import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { commentApi } from '../api-client';
import { MutationKeys } from '../mutation-keys';
import { QueryKeys } from '../query-keys';

export function useMutationUpdateComment() {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (commentId: string) => commentApi.commentCommentIdPut(commentId),
    {
      mutationKey: [MutationKeys.UpdateCommentMutation],
      onSuccess: () => queryClient.invalidateQueries([QueryKeys.GetComments]),
      onError: (error) => {
        if (axios.isAxiosError(error)) {
          console.log(error.message);
        }

        // other guards
      },
      onSettled: () => {
        // redirect
        // close modal
      },
    },
  );
  return mutation;
}

export default useMutationUpdateComment;
