import React from 'react';
import { Row } from 'react-table';
import { PaginationButtonsNavigation } from '../pagination-buttons-navigation/pagination-buttons-navigation';
import { PaginationInformationText } from '../pagination-information-text/pagination-information-text';
import { PaginationSelect } from '../pagination-select/pagination-select';

interface PaginationProps<T extends {}> {
  canNextPage: boolean;
  canPreviousPage: boolean;
  pageOptions: number[];
  pageCount: number;
  page: Row<T>[];
  gotoPage: (updater: number | ((pageIndex: number) => number)) => void;
  nextPage: () => void;
  previousPage: () => void;
  setPageSize: (pageSize: number) => void;
  amountOfElements: number;
  state: { pageIndex: number; pageSize: number };
}

export const Pagination = <T extends {}>({
  canNextPage,
  canPreviousPage,
  pageOptions,
  pageCount,
  page,
  gotoPage,
  nextPage,
  previousPage,
  setPageSize,
  amountOfElements,
  state,
}: PaginationProps<T>) => (
  <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
    <PaginationButtonsNavigation
      canNextPage={canNextPage}
      canPreviousPage={canPreviousPage}
      pageCount={pageCount}
      gotoPage={gotoPage}
      nextPage={nextPage}
      previousPage={previousPage}
    />
    <div className="flex flex-row gap-2 align-middle justify-center">
      <PaginationInformationText
        pageIndex={state.pageIndex}
        pageSize={state.pageSize}
        pageLength={page.length}
        pageOptionsLength={pageOptions.length}
        pageCount={amountOfElements}
      />
      <PaginationSelect value={state.pageSize} setPageSize={setPageSize} />
    </div>
  </div>
);
