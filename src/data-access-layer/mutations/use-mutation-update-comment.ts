import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { CommentApi } from '../../api-types/api';
import { MutationKeys } from '../mutation-keys';
import { QueryKeys } from '../query-keys';

export function useMutationUpdateComment() {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (id: string) => new CommentApi().commentCommentIdPut(id),
    {
      mutationKey: [MutationKeys.UpdateCommentMutation],
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

export default useMutationUpdateComment;
