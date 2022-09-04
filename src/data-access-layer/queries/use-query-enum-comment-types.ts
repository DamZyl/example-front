import { useQuery } from "@tanstack/react-query";
import { enumApi } from "../api-client";
import { QueryKeys } from "../query-keys";

export function useQueryEnumCommentTypes() {
  const query = useQuery([QueryKeys.EnumCommentTypes], async () => (await enumApi.enumGet()).data, {
    onError: (error) => {
      console.log(error);
    },
  });
  return query;
}

export default useQueryEnumCommentTypes;
