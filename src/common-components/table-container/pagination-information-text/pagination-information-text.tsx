import React from 'react';

interface PaginationInformationTextProps {
  pageIndex: number;
  pageSize: number;
  pageLength: number;
  pageOptionsLength: number;
  pageCount: number;
}

export const PaginationInformationText = ({
  pageIndex,
  pageSize,
  pageLength,
  pageOptionsLength,
  pageCount,
}: PaginationInformationTextProps) => (
  <div className="flex flex-row gap-3 align-middle justify-center self-center">
    <p className="text-sm text-gray-700">
      <span className="font-bold">{pageIndex * pageSize + 1}</span>
      &nbsp;&ndash;&nbsp;
      <span className="font-bold">{pageIndex * pageSize + pageLength}</span>
      {pageOptionsLength && (
        <>
          <span>&nbsp;spośród&nbsp;</span>
          <span className="font-bold">{pageCount}</span>
        </>
      )}
    </p>
    <p className="text-sm text-gray-700">Wyświetl</p>
  </div>
);
