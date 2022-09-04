import clsx from 'clsx';
import React from 'react';

export type PaginationButtonVariant = 'left-corner' | 'middle' | 'right-corner';

const getButtonStyle = (variant: PaginationButtonVariant) => {
  switch (variant) {
    case 'left-corner':
      return 'relative inline-flex items-center px-2 py-2 rounded-l-md border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none';
    case 'right-corner':
      return 'relative inline-flex items-center px-2 py-2 rounded-r-md border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none';
    default:
      return 'relative inline-flex items-center px-2 py-2 border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none';
  }
};

interface PaginationButtonProps {
  variant: PaginationButtonVariant;
  disable: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children: React.ReactNode;
}

export const PaginationButton = ({
  variant,
  disable,
  onClick,
  children,
}: PaginationButtonProps) => (
  <button
    type="button"
    disabled={disable}
    className={clsx([getButtonStyle(variant), disable && 'opacity-50'])}
    onClick={onClick}
  >
    {children}
  </button>
);
