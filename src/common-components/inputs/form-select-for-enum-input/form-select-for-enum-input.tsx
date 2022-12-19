/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { EnumViewModel } from '../../../api-types';

type FormSelectForEnumInputProps = {
  data?: EnumViewModel[];
  register: UseFormRegisterReturn;
  fieldName: string;
  label: string;
} & React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

export const FormSelectForEnumInput = ({
  data,
  register,
  fieldName,
  label,
  ...rest
}: FormSelectForEnumInputProps) => (
  <>
    <label htmlFor={fieldName} className="sr-only">
      {label}
    </label>
    <select
      {...register}
      placeholder={label}
      className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
      {...rest}
    >
      {data?.map((item) => (
        <option key={item.key} value={item.key}>
          {item.enumTypeName}
        </option>
      ))}
    </select>
  </>
);
