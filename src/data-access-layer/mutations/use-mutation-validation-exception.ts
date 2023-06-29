import { MutationKeys } from '../mutation-keys';
import { commentApi } from '../api-client';
import { useMutationWithErrorHandling } from '../../utils/hooks/use-mutation-with-error-handling';

export function useMutationValidationException() {
  const mutation = useMutationWithErrorHandling(
    () => commentApi.commentExceptionValidationPost(),
    {
      mutationKey: [MutationKeys.ValidationException],
      onSuccess: () => {},
    },
  );
  return mutation;
}
