import React from 'react';
import { LoadingOverlay } from '../../common-components/loading-overlay/loading-overlay';
import useQueryGetComments from '../../data-access-layer/queries/use-query-get-comments';
import { CommentForm } from './comment-form/comment-form';
import { CommentList } from './comment-list/comment-list';

export const CommentScreen = () => {
  const { data: comments, isLoading } = useQueryGetComments();

  if (!comments) return null;

  return (
    <>
      <LoadingOverlay isLoading={isLoading} />
      <div className="flex flex-row w-full mx-auto px-16 py-10">
        <CommentForm />
        <CommentList comments={comments} />
      </div>
    </>
  );
};
