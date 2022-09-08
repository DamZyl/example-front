import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CommentApi } from '../../api-types/api';
import { MutationKeys } from '../mutation-keys';
import { QueryKeys } from '../query-keys';

export function useMutationUpdateComment() {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (id: string) => new CommentApi().commentCommentIdPut(id),
    {
      mutationKey: [MutationKeys.UpdateCommentMutation],
      onSuccess: () => {
        console.log('Success');
        return queryClient.invalidateQueries([QueryKeys.GetComments]);
        // queryClient.invalidateQueries([QueryKeys.GetComments]);
      },
      onError: (error) => {
        console.log(error);
      },
    },
  );
  return mutation;
}

export default useMutationUpdateComment;
