/* eslint-disable react/jsx-props-no-spreading */
import React, { HTMLInputTypeAttribute } from 'react';
import { FormSelectForEnumInputType } from '../form-select-for-enum-input/form-select-for-enum-input';

type FormInputType = {
  type?: HTMLInputTypeAttribute;
} & Omit<FormSelectForEnumInputType, 'data'>;

export const FormInput = ({
  register,
  fieldName,
  label,
  errorMessage,
  type = 'text',
}: FormInputType) => (
  <div className="flex flex-col w-full">
    <label htmlFor={fieldName} className="text-mg font-bold text-gray-900">
      {label}
    </label>
    <input
      {...register}
      type={type}
      placeholder="Tytuł"
      className="my-2 p-2 h-10 border-2 border-gray-100 w-full rounded-lg focus:outline-none"
    />
    <p className="my-2 text-sm font-bold text-red-500">{errorMessage}</p>
  </div>
);
