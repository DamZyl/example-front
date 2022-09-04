import React from 'react';
import { HeaderGroup } from 'react-table';

interface FilterProps<T extends {}> {
  column: HeaderGroup<T>;
}

export const Filter = <T extends {}>({ column }: FilterProps<T>) => (
  <div>{column.canFilter && column.render('Filter')}</div>
);
