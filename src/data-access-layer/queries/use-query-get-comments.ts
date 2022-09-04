import { useQuery } from '@tanstack/react-query';

export function useQueryGetComments() {
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

export default useQueryGetComments;
