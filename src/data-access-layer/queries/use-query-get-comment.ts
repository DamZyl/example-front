import { useQuery } from '@tanstack/react-query';

export function useQueryGetComment(id: string) {
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

export default useQueryGetComment;
