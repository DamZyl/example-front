/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { FormHeader } from './form-header/form-header';
import { FormContent } from './form-content/form-content';

export const CommentForm = () => (
  <div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
    <FormHeader />
    <FormContent />
  </div>
);
