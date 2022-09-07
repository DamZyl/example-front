/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unstable-nested-components */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Column } from 'react-table';
import { CommentViewModel } from '../../../api-types/api';
import { LoadingOverlay } from '../../../common-components/loading-overlay/loading-overlay';
import {
  TableContainer,
  TableContainerProps,
} from '../../../common-components/table-container/table-container';
import useMutationUpdateComment from '../../../data-access-layer/mutations/use-mutation-update-comment';
import useQueryGetComments from '../../../data-access-layer/queries/use-query-get-comments';

type CommentTableProps = {
  handleAmountOfData: (total: number | undefined) => void;
} & Required<
  Pick<
    TableContainerProps<CommentViewModel>,
    'handleSelectedRow' | 'handleSelectedAllRow'
  >
>;

export const CommentTable = ({
  handleAmountOfData,
  handleSelectedRow,
  handleSelectedAllRow,
}: CommentTableProps) => {
  const [commentId, setCommentId] = useState<string>('test');

  const { data } = useQueryGetComments();
  const { mutate, isLoading } = useMutationUpdateComment();

  useEffect(() => {
    handleAmountOfData(data?.length);
  }, [data?.length, handleAmountOfData]);

  const handleRowSelection = (model: CommentViewModel) => {
    console.log(model.id);
    setCommentId(model.id as string);
  };

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
            <button
              type="button"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => mutate(commentId as string)}
            >
              Negatywny
            </button>
          ) : (
            <button
              type="button"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => mutate(commentId as string)}
            >
              Pozytywny
            </button>
          ),
      },
    ],
    [commentId, mutate],
  );

  if (!data) return null;

  return (
    <div className="flex min-h-screen">
      <LoadingOverlay isLoading={isLoading} />
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
