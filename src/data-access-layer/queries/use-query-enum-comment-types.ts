import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { enumApi } from '../api-client';
import { QueryKeys } from '../query-keys';

export function useQueryEnumCommentTypes() {
  const query = useQuery(
    [QueryKeys.GetEnumCommentTypes],
    async () => (await enumApi.enumGet()).data,
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
