import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { CreateCommentInput } from '../../api-types';
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
      onSuccess: () =>
        // Invalidate many queries https://stackoverflow.com/questions/74370694/react-query-invalidate-multiple-queries-but-wait-until-they-all-finished-on-mut
        // Promise.all([
        //   queryClient.invalidateQueries([QueryKeys.GetComments]),
        //   queryClient.invalidateQueries([QueryKeys.GetEnumType]),
        // ]),
        queryClient.invalidateQueries([QueryKeys.GetComments]),
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
