/* eslint-disable react/button-has-type */
import React from 'react';

interface FormButtonProps {
  disabled: boolean;
  type?: 'button' | 'submit' | 'reset';
  text: string;
}

export const FormButton = ({ disabled, type, text }: FormButtonProps) => (
  <button
    disabled={disabled}
    type={type}
    className="mt-6 bg-indigo-600 text-white rounded py-6 w-full disabled:bg-gray-300 disabled:cursor-not-allowed"
  >
    {text}
  </button>
);
