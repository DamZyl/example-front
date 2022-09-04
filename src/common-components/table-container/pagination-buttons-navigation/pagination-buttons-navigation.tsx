import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/solid';
import React from 'react';
import { PaginationButton } from '../pagination-button/pagination-button';

interface PaginationButtonsNavigationProps {
  canNextPage: boolean;
  canPreviousPage: boolean;
  pageCount: number;
  gotoPage: (updater: number | ((pageIndex: number) => number)) => void;
  nextPage: () => void;
  previousPage: () => void;
}

export const PaginationButtonsNavigation = ({
  canNextPage,
  canPreviousPage,
  pageCount,
  gotoPage,
  nextPage,
  previousPage,
}: PaginationButtonsNavigationProps) => (
  <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
    <nav
      className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
      aria-label="Paginacja"
    >
      <PaginationButton
        variant="left-corner"
        disable={!canPreviousPage}
        onClick={() => gotoPage(0)}
      >
        <ChevronDoubleLeftIcon className="h-5 w-5" aria-hidden="true" />
      </PaginationButton>
      <PaginationButton
        variant="middle"
        disable={!canPreviousPage}
        onClick={previousPage}
      >
        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
      </PaginationButton>
      {/* TODO: Add page number and ... */}
      <PaginationButton
        variant="middle"
        disable={!canNextPage}
        onClick={nextPage}
      >
        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
      </PaginationButton>
      <PaginationButton
        variant="right-corner"
        disable={!canNextPage}
        onClick={() => gotoPage(pageCount - 1)}
      >
        <ChevronDoubleRightIcon className="h-5 w-5" aria-hidden="true" />
      </PaginationButton>
    </nav>
  </div>
);
