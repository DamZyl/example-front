import React from 'react';
import { LoadingOverlay } from '../../../common-components/loading-overlay/loading-overlay';
import useQueryGetComments from '../../../data-access-layer/queries/use-query-get-comments';
import { CommentCard } from '../comment-card/comment-card';

export const CommentList = () => {
  const { data = [], isLoading } = useQueryGetComments();

  return (
    <div className="flex flex-col w-full mx-auto px-16 py-10">
      <LoadingOverlay isLoading={isLoading} />
      {data.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
