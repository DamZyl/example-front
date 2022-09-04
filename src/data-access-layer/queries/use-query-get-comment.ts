import { useQuery } from "@tanstack/react-query";
import { commentApi } from "../api-client";
import { QueryKeys } from "../query-keys";

export function useQueryGetComment(id: string) {
  const query = useQuery(
    [QueryKeys.GetComment, id],
    async () => (await commentApi.commentIdGet(id)).data,
    {
      onError: (error) => {
        console.log(error);
      },
    }
  );
  return query;
}

export default useQueryGetComment;
