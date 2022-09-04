import React from 'react';
import { CommentViewModel } from '../../../api-types/api';
import { CommentCard } from '../comment-card/comment-card';

interface CommentListProps {
  comments: CommentViewModel[];
}

export const CommentList = ({ comments }: CommentListProps) => (
  <>
    {comments.map((comment) => (
      <CommentCard comment={comment} />
    ))}
  </>
);

