import React from 'react';
import { useMutationServerException } from '../../../data-access-layer/mutations/use-mutation-server-exception';
import { useMutationNotFoundException } from '../../../data-access-layer/mutations/use-mutation-not-found-exception';
import { useMutationValidationException } from '../../../data-access-layer/mutations/use-mutation-validation-exception';
import { useMutationUnhandledException } from '../../../data-access-layer/mutations/use-mutation-unhandled-exception';
import { Button } from '../../../common-components/buttons/button/button';

export const ButtonsSection = () => {
  const { mutate: triggerValidationException } =
    useMutationValidationException();
  const { mutate: triggerNotFoundException } = useMutationNotFoundException();
  const { mutate: triggerServerException } = useMutationServerException();
  const { mutate: triggerUnhandledException } = useMutationUnhandledException();

  return (
    <div className="flex flex-row justify-center gap-6">
      <Button
        text="Validation exception"
        onClick={() => triggerValidationException()}
      />
      <Button
        text="Not found exception"
        onClick={() => triggerNotFoundException()}
      />
      <Button
        type="button"
        text="Server exception"
        onClick={() => triggerServerException()}
      />
      <Button
        text="Unhandled exception"
        onClick={() => triggerUnhandledException()}
      />
    </div>
  );
};
