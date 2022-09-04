/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { CommentViewModel } from '../../api-types/api';
import { CommentTable } from './comment-table/comment-table';

export const CommentTableScreen = () => {
  const [rowSelection, setRowSelection] = useState<CommentViewModel[]>([]);
  const [amountOfData, setAmountOfData] = useState<number | undefined>(0);

  const handleSelectedRow = (model: CommentViewModel) => {
    setRowSelection((old) => {
      if (old.some((v) => v.id === model.id)) {
        return old.filter((v) => v.id !== model.id);
      }
      return [...old, model];
    });
  };

  const handleSelectedAllRows = (models: CommentViewModel[]) => {
    setRowSelection(models);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-4 pt-4">
        <h1 className="text-2xl leading-none font-bold text-gray-900 self-center">
          Przykładowy text ({amountOfData})
        </h1>
      </div>
      <CommentTable
        handleAmountOfData={setAmountOfData}
        handleSelectedRow={handleSelectedRow}
        handleSelectedAllRow={handleSelectedAllRows}
      />
    </div>
  );
};

