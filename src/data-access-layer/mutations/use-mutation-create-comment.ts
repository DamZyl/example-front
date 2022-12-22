import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
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
      onSuccess: () => queryClient.invalidateQueries([QueryKeys.GetComments]),
      onError: (error) => {
        if (axios.isAxiosError(error)) {
          console.log(error.message);
        }
        // other guards
      },
    },
  );
  return mutation;
}

export default useMutationCreateComment;
