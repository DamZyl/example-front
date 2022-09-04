/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { EnumViewModel } from '../../../api-types/api';

export type FormSelectForEnumInputType = {
  data?: EnumViewModel[];
  register: UseFormRegisterReturn;
  fieldName: string;
  label: string;
  errorMessage: string | undefined;
};

export const FormSelectForEnumInput = ({
  data,
  register,
  fieldName,
  label,
  errorMessage,
}: FormSelectForEnumInputType) => (
  <div className="flex flex-col w-full">
    <label htmlFor={fieldName} className="text-mg font-bold text-gray-900">
      {label}
    </label>
    <select
      {...register}
      placeholder="Typ"
      className="my-2 p-2 h-10 border-2 border-gray-100 w-full rounded-lg focus:outline-none"
    >
      {data?.map((item) => (
        <option key={item.key} value={item.key}>
          {item.enumTypeName}
        </option>
      ))}
    </select>
    <p className="my-2 text-sm font-bold text-red-500">{errorMessage}</p>
  </div>
);
