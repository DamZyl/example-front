/* eslint-disable react/jsx-one-expression-per-line */
import { clsx } from 'clsx';
import dayjs from 'dayjs';
import React from 'react';
import { CommentViewModel } from '../../api-types/api';
import { CommentType } from '../../utils/constants';

interface CommentCardProps {
  comment: CommentViewModel;
}

export const CommentCard = ({ comment }: CommentCardProps) => (
  <div
    key={comment.id}
    className={clsx([
      'flex flex-col w-1/2 mx-auto px-16 py-10 text-center rounded-lg mt-4',
      comment.type === CommentType.Positive && 'bg-green-100',
      comment.type === CommentType.Negative && 'bg-red-100',
    ])}
  >
    <div className="flex flex-row justify-between">
      <p className="text-mg font-bold">{comment.title}</p>
      <p>{dayjs(comment.date).format('DD-MM-YYYY')} r.</p>
    </div>
    <p className="text-mg mt-4">{comment.message}</p>
    <p className="text-mg italic self-end">{comment.author}</p>
  </div>
);
