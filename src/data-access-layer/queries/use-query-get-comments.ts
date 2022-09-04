import { useQuery } from '@tanstack/react-query';
import { CommentApi } from '../../api-types';

export function useQueryGetComments() {
  const query = useQuery(
    ['get-comments'],
    async () => (await new CommentApi(undefined).commentGet()).data,
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
