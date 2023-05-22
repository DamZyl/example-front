import { CreateCommentInput, CommentType as Type } from '../api-types';

export enum CommentType {
  Positive = 'Positive',
  Negative = 'Negative',
}

export const mockCreateCommentInput: CreateCommentInput = {
  author: 'Test',
  title: 'Test',
  message: 'Test',
  date: '2023-05-24',
  type: Type.NUMBER_0,
};
