/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import clsx from 'clsx';
import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps = {
  text: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  text,
  disabled = false,
  type = 'button',
  ...rest
}: ButtonProps) => (
  <button
    type={type}
    className={clsx([
      'w-full p-4 mt-4 text-sm font-medium text-white bg-blue-500 rounded-lg text-center',
      disabled && ' bg-gray-500',
    ])}
    disabled={disabled}
    {...rest}
  >
    {text}
  </button>
);
