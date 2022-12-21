import React from 'react';
import { CommentForm } from './comment-form/comment-form';
import { CommentList } from './comment-list/comment-list';

export const CommentScreen = () => (
  <div className="flex flex-row w-full mx-auto px-16 py-10">
    <CommentForm />
    <CommentList />
  </div>
);
