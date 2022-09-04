/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Row, TableBodyPropGetter, TableBodyProps } from 'react-table';

interface BodyProps<T extends {}> {
  page: Row<T>[];
  getTableBodyProps: (
    propGetter?: TableBodyPropGetter<T> | undefined,
  ) => TableBodyProps;
  prepareRow: (row: Row<T>) => void;
}

export const Body = <T extends {}>({
  page,
  getTableBodyProps,
  prepareRow,
}: BodyProps<T>) => (
  <tbody className="divide-y divide-gray-200 bg-white" {...getTableBodyProps()}>
    {page.map((row) => {
      prepareRow(row);
      return (
        <tr {...row.getRowProps()}>
          {row.cells.map((cell) => (
            <td className="p-2" {...cell.getCellProps()}>
              {cell.render('Cell')}
            </td>
          ))}
        </tr>
      );
    })}
  </tbody>
);
