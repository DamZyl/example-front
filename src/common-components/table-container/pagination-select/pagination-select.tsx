import React from 'react';

interface PaginationSelectProps {
  value: number;
  setPageSize: (pageSize: number) => void;
}

const pageSizes: number[] = [2, 10, 15, 20, 25, 30, 35, 40, 45, 50];

export const PaginationSelect = ({
  value,
  setPageSize,
}: PaginationSelectProps) => (
  <select
    className="text-sm text-gray-700 font-bold border-2 border-gray-100 rounded-lg focus:outline-none"
    value={value}
    onChange={(e) => {
      setPageSize(Number(e.target.value));
    }}
  >
    {pageSizes.map((pageSize) => (
      <option
        className="text-sm text-gray-700 font-bold"
        key={pageSize}
        value={pageSize}
      >
        {pageSize}
      </option>
    ))}
  </select>
);
