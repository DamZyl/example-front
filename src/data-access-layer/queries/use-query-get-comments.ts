import { useQuery } from "@tanstack/react-query";
import { commentApi } from "../api-client";
import { QueryKeys } from "../query-keys";

export function useQueryGetComments() {
  const query = useQuery(
    [QueryKeys.GetComments],
    async () => (await commentApi.commentGet()).data,
    {
      onError: (error) => {
        console.log(error);
      },
    }
  );
  return query;
}

export default useQueryGetComments;
