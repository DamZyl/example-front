import React from 'react';
import useQueryGetComments from '../../data-access-layer/queries/use-query-get-comments';
import { CommentForm } from './comment-form/comment-form';
import { LoadingOverlay } from '../../common-components/loading-overlay/loading-overlay';
import { CommentList } from '../comment-list/comment-list';

export const CommentScreen = () => {
  const { data: comments, isLoading } = useQueryGetComments();

  if (!comments) return null;

  return (
    <div className="flex flex-col w-full mx-auto px-16 py-10">
      <LoadingOverlay isLoading={isLoading} />
      <CommentForm />
      <CommentList comments={comments} />
    </div>
  );
};
