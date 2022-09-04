import React from 'react';

interface DefaultColumnFilterProps {
  column: {
    filterValue: string;
    setFilter: (value?: string) => void;
  };
}

export const DefaultColumnFilter = ({
  column: { filterValue, setFilter },
}: DefaultColumnFilterProps) => (
  <input
    className="h-10 border-2 border-gray-100 w-full rounded-lg focus:border-2 focus:border-gray-400 focus:rounded-lg focus:outline-none"
    value={filterValue || ''}
    onChange={(e) => {
      setFilter(e.target.value || undefined);
    }}
  />
);
