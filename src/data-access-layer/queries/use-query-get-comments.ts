import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { commentApi } from '../api-client';
import { QueryKeys } from '../query-keys';

export function useQueryGetComments() {
  const query = useQuery(
    [QueryKeys.GetComments],
    async ({ signal }) => (await commentApi.commentGet({ signal })).data,
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

export default useQueryGetComments;
