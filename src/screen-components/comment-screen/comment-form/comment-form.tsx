/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { FormButton } from '../../../common-components/buttons/form-button/form-button';

const commentFormSchema = 'schema';

type CommentFormType = 'type form schema';

export const CommentForm = () => (
  <form className="flex flex-col w-1/2 mx-auto px-16 py-10">
    <FormButton disabled type="submit" text="Prześlij" />
  </form>
);
