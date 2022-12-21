/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import clsx from 'clsx';
import React from 'react';

type ButtonProps = {
  text: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button = ({
  text,
  disabled = false,
  type = 'button',
  ...rest
}: ButtonProps) => (
  <button
    type={type}
    className={clsx([
      'w-full p-4 pr-12 mt-4 text-sm font-medium text-white bg-blue-500 rounded-lg',
      disabled && ' bg-gray-500',
    ])}
    disabled={disabled}
    {...rest}
  >
    {text}
  </button>
);
