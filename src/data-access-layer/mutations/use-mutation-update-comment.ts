import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CommentApi } from '../../api-types/api';

export function useMutationUpdateComment() {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (id: string) => new CommentApi().commentCommentIdPut(id),
    {
      mutationKey: ['update-comment'],
      onSuccess: () => {
        console.log('Udało się');
        // logic
        return queryClient.invalidateQueries(['get-comments']);
      },
      onError: (error) => {
        console.log(error);
        // errors
      },
    },
  );
  return mutation;
}

export default useMutationUpdateComment;
