import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { commentApi } from '../api-client';
import { QueryKeys } from '../query-keys';

export function useQueryGetComment(commentId: string) {
  const query = useQuery(
    [QueryKeys.GetComment, commentId],
    async ({ signal }) =>
      (await commentApi.commentIdGet(commentId, { signal })).data,
    {
      onError: (error) => {
        if (axios.isAxiosError(error)) {
          console.log(error.message);
        }
        // other guards
      },
    },
  );
  return query;
}

export default useQueryGetComment;
