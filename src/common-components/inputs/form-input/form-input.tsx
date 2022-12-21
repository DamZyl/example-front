/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type FormInputProps = {
  register: UseFormRegisterReturn;
  fieldName: string;
  label: string;
  errorMessage?: string;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const FormInput = ({
  register,
  fieldName,
  label,
  errorMessage,
  readOnly = false,
  type = 'text',
  ...rest
}: FormInputProps) => (
  <>
    <label htmlFor={fieldName} className="sr-only">
      {label}
    </label>
    <input
      {...register}
      readOnly={readOnly}
      type={type}
      className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
      placeholder={label}
      {...rest}
    />
    <p className="text-red-500 mt-4 text-base">{errorMessage}</p>
  </>
);
