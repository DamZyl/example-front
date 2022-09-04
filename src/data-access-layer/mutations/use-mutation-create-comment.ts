import { useMutation } from '@tanstack/react-query';

export function useMutationCreateComment() {
  const mutation = useMutation(
    // fn,
    {
      mutationKey: [],
      onSuccess: () => {
        console.log('Udało się');
        // logic
      },
      onError: (error) => {
        console.log(error);
        // errors
      },
    },
  );
  return mutation;
}

export default useMutationCreateComment;
