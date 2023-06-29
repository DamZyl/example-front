import { MutationKeys } from '../mutation-keys';
import { commentApi } from '../api-client';
import { useMutationWithErrorHandling } from '../../utils/hooks/use-mutation-with-error-handling';

export function useMutationUnhandledException() {
  const mutation = useMutationWithErrorHandling(
    () => commentApi.commentExceptionUnhandledPost(),
    {
      mutationKey: [MutationKeys.UnhandledException],
      onSuccess: () => {},
    },
  );
  return mutation;
}
