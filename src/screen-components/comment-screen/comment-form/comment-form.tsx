/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import useQueryEnumCommentTypes from '../../../data-access-layer/queries/use-query-enum-comment-types';
import useMutationCreateComment from '../../../data-access-layer/mutations/use-mutation-create-comment';
import { LoadingOverlay } from '../../../common-components/loading-overlay/loading-overlay';
import { FormInput } from '../../../common-components/inputs/form-input/form-input';
import { FormSelectForEnumInput } from '../../../common-components/inputs/form-select-for-enum-input/form-select-for-enum-input';
import { CommentType } from '../../../api-types/api';

const commentFormSchema = Yup.object()
  .shape({
    title: Yup.string().required('Title is required.'),
    message: Yup.string().required('Message is required.'),
    date: Yup.string().required('Date is required.'),
    author: Yup.string().required('Author is required.'),
    type: Yup.number().required('Type is required.'),
  })
  .required();

type CommentFormType = Yup.InferType<typeof commentFormSchema>;

export const CommentForm = () => {
  const { data: commentTypes } = useQueryEnumCommentTypes();
  const { mutateAsync: createCommentMutation, isLoading } =
    useMutationCreateComment();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<CommentFormType>({
    resolver: yupResolver(commentFormSchema),
    defaultValues: {
      title: '',
      message: '',
      date: '',
      author: '',
      type: 0,
    },
    mode: 'onBlur',
  });

  const handleOnSubmit: SubmitHandler<CommentFormType> = (data) => {
    console.log(data);
    createCommentMutation({
      title: data.title,
      message: data.message,
      date: data.date,
      author: data.author,
      type: data.type as CommentType,
    });
  };

  return (
    <>
      <LoadingOverlay isLoading={isLoading} />
      <form
        className="flex flex-col w-1/2 mx-auto px-16 py-10"
        onSubmit={handleSubmit(handleOnSubmit)}
      >
        <FormInput
          register={register('title')}
          fieldName="title"
          label="Tytuł"
          errorMessage={errors.title?.message}
        />
        <FormInput
          register={register('message')}
          fieldName="message"
          label="Treść"
          errorMessage={errors.message?.message}
        />
        <FormInput
          register={register('date')}
          fieldName="date"
          label="Data"
          type="date"
          errorMessage={errors.date?.message}
        />
        <FormInput
          register={register('author')}
          fieldName="author"
          label="Autor"
          errorMessage={errors.author?.message}
        />
        <FormSelectForEnumInput
          register={register('type')}
          fieldName="author"
          label="Autor"
          errorMessage={errors.author?.message}
          data={commentTypes}
        />
        <button
          disabled={!isValid}
          type="submit"
          className="mt-6 bg-indigo-600 text-white rounded py-6 w-full disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Prześlij
        </button>
      </form>
    </>
  );
};
