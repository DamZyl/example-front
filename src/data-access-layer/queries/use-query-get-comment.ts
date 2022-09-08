import { useQuery } from '@tanstack/react-query';
import { commentApi } from '../api-client';
import { QueryKeys } from '../query-keys';

export function useQueryGetComment(commentId: string) {
  const query = useQuery(
    [QueryKeys.GetComment, commentId],
    async () => (await commentApi.commentIdGet(commentId)).data,
    {
      onError: (error) => {
        console.log(error);
      },
    },
  );
  return query;
}

export default useQueryGetComment;
