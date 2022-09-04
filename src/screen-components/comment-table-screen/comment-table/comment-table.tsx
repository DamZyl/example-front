import React, { useEffect, useMemo } from 'react';
import { Column } from 'react-table';
import { CommentViewModel } from '../../../api-types/api';
import {
  TableContainer,
  TableContainerProps,
} from '../../../common-components/table-container/table-container';

type CommentTableProps = {
  //   handleAmountOfData: (total: number | undefined) => void;
} & Required<
  Pick<
    TableContainerProps<CommentViewModel>,
    'handleSelectedRow' | 'handleSelectedAllRow'
  >
>;

export const CommentTable = ({
  //   handleAmountOfData,
  handleSelectedRow,
  handleSelectedAllRow,
}: CommentTableProps) => {
  // TODO: add react-query

  //   useEffect(() => {
  //     handleAmountOfData(data.length);
  //   }, [handleAmountOfData]);

  const columns = useMemo<Column<CommentViewModel>[]>(
    () => [
      {
        Header: 'Id',
        accessor: 'id',
      },
      {
        Header: 'Tytuł',
        accessor: 'title',
      },
      {
        Header: 'Data',
        accessor: 'date',
      },
      {
        Header: 'Autor',
        accessor: 'author',
      },
      {
        Header: 'Typ',
        accessor: 'type',
      },
    ],
    [],
  );

  //   if (!data) return null;

  return (
    <div className="flex min-h-screen">
      <TableContainer
        columns={columns}
        data={data}
        handleSelectedRow={handleSelectedRow}
        handleSelectedAllRow={handleSelectedAllRow}
      />
    </div>
  );
};

