import { MutationKeys } from '../mutation-keys';
import { commentApi } from '../api-client';
import { useMutationWithErrorHandling } from '../../utils/hooks/use-mutation-with-error-handling';

export function useMutationServerException() {
  const mutation = useMutationWithErrorHandling(
    () => commentApi.commentExceptionInternalPost(),
    {
      mutationKey: [MutationKeys.ServerException],
      onSuccess: () => {},
    },
  );
  return mutation;
}
