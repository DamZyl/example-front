/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import useQueryEnumCommentTypes from '../../../data-access-layer/queries/use-query-enum-comment-types';
import useMutationCreateComment from '../../../data-access-layer/mutations/use-mutation-create-comment';
import { LoadingOverlay } from '../../../common-components/loading-overlay/loading-overlay';

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

  const handleOnSubmit: SubmitHandler<CommentFormType> = async (data) => {
    console.log(data);
    await createCommentMutation({
      title: data.title,
      message: data.message,
      date: data.date,
      author: data.author,
      type: data.type,
    });
  };

  return (
    <>
      <LoadingOverlay isLoading={isLoading} />
      <form
        className="flex flex-col w-1/2 mx-auto px-16 py-10"
        onSubmit={handleSubmit(handleOnSubmit)}
      >
        <div className="flex flex-col w-full">
          <label htmlFor="title" className="text-mg font-bold text-gray-900">
            Tytuł
          </label>
          <input
            {...register('title')}
            type="text"
            placeholder="Tytuł"
            className="my-2 p-2 h-10 border-2 border-gray-100 w-full rounded-lg focus:outline-none"
          />
          <p className="my-2 text-sm font-bold text-red-500">
            {errors.title?.message}
          </p>
          <label htmlFor="title" className="text-mg font-bold text-gray-900">
            Treść
          </label>
          <input
            {...register('message')}
            type="text"
            placeholder="Treść"
            className="my-2 p-2 h-10 border-2 border-gray-100 w-full rounded-lg focus:outline-none"
          />
          <p className="my-2 text-sm font-bold text-red-500">
            {errors.message?.message}
          </p>
          <label htmlFor="title" className="text-mg font-bold text-gray-900">
            Data
          </label>
          <input
            {...register('date')}
            type="date"
            placeholder="Data"
            className="my-2 p-2 h-10 border-2 border-gray-100 w-full rounded-lg focus:outline-none"
          />
          <p className="my-2 text-sm font-bold text-red-500">
            {errors.date?.message}
          </p>
          <label htmlFor="title" className="text-mg font-bold text-gray-900">
            Autor
          </label>
          <input
            {...register('author')}
            type="text"
            placeholder="Autor"
            className="my-2 p-2 h-10 border-2 border-gray-100 w-full rounded-lg focus:outline-none"
          />
          <p className="my-2 text-sm font-bold text-red-500">
            {errors.author?.message}
          </p>
          <label htmlFor="title" className="text-mg font-bold text-gray-900">
            Typ
          </label>
          <select
            {...register('type')}
            placeholder="Typ"
            className="my-2 p-2 h-10 border-2 border-gray-100 w-full rounded-lg focus:outline-none"
          >
            {commentTypes?.map((item) => (
              <option key={item.key} value={item.key}>
                {item.enumTypeName}
              </option>
            ))}
          </select>
          <p className="my-2 text-sm font-bold text-red-500">
            {errors.type?.message}
          </p>
        </div>
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
