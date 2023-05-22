import React from 'react';
import { CommentForm } from './comment-form/comment-form';
import { CommentList } from './comment-list/comment-list';
import { ButtonsSection } from './buttons-section/buttons-section';

export const CommentScreen = () => (
  <div className="flex flex-col w-full mx-auto px-16 py-10">
    <ButtonsSection />
    <div className="flex flex-row w-full mx-auto px-16 py-10">
      <CommentForm />
      <CommentList />
    </div>
  </div>
);
