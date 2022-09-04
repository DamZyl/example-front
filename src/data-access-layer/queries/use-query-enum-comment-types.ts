import { useQuery } from '@tanstack/react-query';

export function useQueryEnumCommentTypes() {
  const query = useQuery(
    // query key
    // fn,
    {
      onError: (error) => {
        console.log(error);
        // errors
      },
    },
  );
  return query;
}

export default useQueryEnumCommentTypes;
