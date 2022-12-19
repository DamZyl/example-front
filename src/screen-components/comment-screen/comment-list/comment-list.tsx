import React from 'react';
import { CommentViewModel } from '../../../api-types/api';
import { CommentCard } from '../comment-card/comment-card';

interface CommentListProps {
  comments: CommentViewModel[];
}

export const CommentList = ({ comments }: CommentListProps) => (
  <div className="flex flex-col w-full mx-auto px-16 py-10">
    {comments.map((comment) => (
      <CommentCard comment={comment} />
    ))}
  </div>
);
