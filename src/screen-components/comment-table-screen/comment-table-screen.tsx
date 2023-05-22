/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { CommentViewModel } from '../../api-types/api';
import { CommentTable } from './comment-table/comment-table';

export const CommentTableScreen = () => {
  const [rowSelection, setRowSelection] = useState<CommentViewModel[]>([]);
  const [amountOfData, setAmountOfData] = useState<number | undefined>(0);
  const [commentId, seCommentId] = useState<string | undefined>('');

  const handleSelectedRow = (model: CommentViewModel) => {
    setRowSelection((old) => {
      if (old.some((v) => v.id === model.id)) {
        seCommentId(model?.id);
        return old.filter((v) => v.id !== model.id);
      }
      seCommentId(model?.id);
      return [...old, model];
    });
  };

  const handleSelectedAllRows = (models: CommentViewModel[]) => {
    setRowSelection(models);
  };

  console.log(`Selected comment ${rowSelection}`);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-4 pt-4">
        <h1 className="text-2xl leading-none font-bold text-gray-900 self-center">
          Comments ({amountOfData})
        </h1>
      </div>
      <CommentTable
        handleAmountOfData={setAmountOfData}
        handleSelectedRow={handleSelectedRow}
        handleSelectedAllRow={handleSelectedAllRows}
        commentId={commentId}
      />
    </div>
  );
};
