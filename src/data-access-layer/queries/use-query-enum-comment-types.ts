import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { enumApi } from '../api-client';
import { QueryKeys } from '../query-keys';

export function useQueryEnumCommentTypes() {
  const query = useQuery(
    [QueryKeys.GetEnumCommentTypes],
    async ({ signal }) => (await enumApi.enumGet({ signal })).data,
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

export default useQueryEnumCommentTypes;
