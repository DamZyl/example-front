import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { enumApi } from '../api-client';
import { QueryKeys } from '../query-keys';

export function useQueryGetEnumType() {
  const query = useQuery(
    [QueryKeys.GetEnumType],
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

export default useQueryGetEnumType;
