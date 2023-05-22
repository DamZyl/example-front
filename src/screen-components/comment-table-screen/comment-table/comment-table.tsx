/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unstable-nested-components */
import React, { useEffect, useMemo } from 'react';
import { Column } from 'react-table';
import { CommentViewModel } from '../../../api-types/api';
import { LoadingOverlay } from '../../../common-components/loading-overlay/loading-overlay';
import {
  TableContainer,
  TableContainerProps,
} from '../../../common-components/table-container/table-container';
import useMutationUpdateComment from '../../../data-access-layer/mutations/use-mutation-update-comment';
import useQueryGetComments from '../../../data-access-layer/queries/use-query-get-comments';
import { CommentType } from '../../../utils/constants';

type CommentTableProps = {
  handleAmountOfData: (total: number | undefined) => void;
  commentId?: string;
} & Pick<
  TableContainerProps<CommentViewModel>,
  'handleSelectedRow' | 'handleSelectedAllRow'
>;

export const CommentTable = ({
  handleAmountOfData,
  handleSelectedRow,
  handleSelectedAllRow,
  commentId,
}: CommentTableProps) => {
  const { data = [] } = useQueryGetComments();
  const { mutate, isLoading } = useMutationUpdateComment();

  useEffect(() => {
    handleAmountOfData(data.length);
  }, [data.length, handleAmountOfData]);

  const columns = useMemo<Column<CommentViewModel>[]>(
    () => [
      {
        Header: 'Title',
        accessor: 'title',
      },
      {
        Header: 'Date',
        accessor: 'date',
        Cell: (date) => (
          <span>{new Date(date.value as string).toLocaleDateString()}</span>
        ),
      },
      {
        Header: 'Author',
        accessor: 'author',
      },
      {
        Header: 'Actions',
        accessor: 'type',
        disableFilters: true,
        Cell: (type) =>
          type.value === CommentType.Negative ? (
            <button
              type="button"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => mutate(commentId as string)}
            >
              Negative
            </button>
          ) : (
            <button
              type="button"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => mutate(commentId as string)}
            >
              Positive
            </button>
          ),
      },
    ],
    [commentId, mutate],
  );

  return (
    <div className="flex min-h-screen">
      <LoadingOverlay isLoading={isLoading} />
      <TableContainer
        columns={columns}
        data={data}
        handleSelectedRow={handleSelectedRow}
        handleSelectedAllRow={handleSelectedAllRow}
      />
    </div>
  );
};
