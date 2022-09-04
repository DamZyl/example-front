/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unstable-nested-components */
import clsx from 'clsx';
import React, { useEffect, useMemo } from 'react';
import { Column } from 'react-table';
import { CommentViewModel } from '../../../api-types/api';
import {
  TableContainer,
  TableContainerProps,
} from '../../../common-components/table-container/table-container';
import useQueryGetComments from '../../../data-access-layer/queries/use-query-get-comments';

type CommentTableProps = {
  handleAmountOfData: (total: number | undefined) => void;
} & Required<
  Pick<
    TableContainerProps<CommentViewModel>,
    'handleSelectedRow' | 'handleSelectedAllRow' | 'handleRowSelection'
  >
>;

export const CommentTable = ({
  handleAmountOfData,
  handleSelectedRow,
  handleSelectedAllRow,
  handleRowSelection,
}: CommentTableProps) => {
  //   TODO: add react-query

  const { data } = useQueryGetComments();

  useEffect(() => {
    handleAmountOfData(data?.length);
  }, [data?.length, handleAmountOfData]);

  const columns = useMemo<Column<CommentViewModel>[]>(
    () => [
      {
        Header: 'Tytuł',
        accessor: 'title',
      },
      {
        Header: 'Data',
        accessor: 'date',
        Cell: (date) => (
          <span>{new Date(date.value as string).toLocaleDateString()}</span>
        ),
      },
      {
        Header: 'Autor',
        accessor: 'author',
      },
      {
        Header: 'Akcja',
        accessor: 'type',
        Cell: (type) =>
          type.value === 'Negatywny' ? (
            <button type="button" className="bg-red-500 text-wh">
              Negatywny
            </button>
          ) : (
            <button type="button" className="bg-green-500 text-wh">
              Pozytywny
            </button>
          ),
      },
    ],
    [],
  );

  if (!data) return null;

  return (
    <div className="flex min-h-screen">
      <TableContainer
        columns={columns}
        data={data}
        handleSelectedRow={handleSelectedRow}
        handleSelectedAllRow={handleSelectedAllRow}
        handleRowSelection={handleRowSelection}
      />
    </div>
  );
};

