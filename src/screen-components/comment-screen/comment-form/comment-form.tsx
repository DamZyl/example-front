/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import clsx from 'clsx';
import { CommentType } from '../../../api-types';
import useQueryEnumCommentTypes from '../../../data-access-layer/queries/use-query-enum-comment-types';
import useMutationCreateComment from '../../../data-access-layer/mutations/use-mutation-create-comment';
import { LoadingOverlay } from '../../../common-components/loading-overlay/loading-overlay';

const commentFormSchema = Yup.object({
  title: Yup.string().required('Title is required.'),
  message: Yup.string().required('Message is required.'),
  date: Yup.string().required('Date is required.'),
  author: Yup.string().required('Author is required.'),
  type: Yup.mixed<CommentType>().required('Type is required.'),
});

type CommentFormType = Yup.InferType<typeof commentFormSchema>;

export const CommentForm = () => {
  const { data: commentTypesEnum, isLoading: commentTypesLoading } =
    useQueryEnumCommentTypes();
  const { mutate: createCommentMutation, isLoading: createCommentLoading } =
    useMutationCreateComment();

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<CommentFormType>({
    resolver: yupResolver(commentFormSchema),
    defaultValues: {
      title: '',
      message: '',
      author: '',
      date: '',
      type: 0,
    },
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<CommentFormType> = (data) => {
    console.log(data);
    createCommentMutation({
      title: data.title,
      message: data.message,
      date: data.date,
      author: data.author,
      type: Number(data.type) as CommentType,
    });
  };
  return (
    <>
      <LoadingOverlay isLoading={commentTypesLoading || createCommentLoading} />
      <div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">
            Formularz dodawania komentarzy
          </h1>
          <p className="mt-4 text-gray-500">Wypełnij poniższy komentarz</p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-md mx-auto mt-8 mb-0 space-y-4"
        >
          <div>
            <label htmlFor="title" className="sr-only">
              Tytuł
            </label>
            <input
              {...register('title')}
              type="text"
              className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Tytuł"
            />
            <p className="text-red-500 mt-4 text-base">
              {errors.title?.message}
            </p>
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Wiadomość
            </label>
            <input
              {...register('message')}
              type="text"
              className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Wiadomość"
            />
            <p className="text-red-500 mt-4 text-base">
              {errors.message?.message}
            </p>
          </div>
          <div>
            <label htmlFor="date" className="sr-only">
              Data
            </label>
            <input
              {...register('date')}
              type="date"
              className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Data"
            />
            <p className="text-red-500 mt-4 text-base">
              {errors.date?.message}
            </p>
          </div>
          <div>
            <label htmlFor="author" className="sr-only">
              Autor
            </label>
            <input
              {...register('author')}
              type="text"
              className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Autor"
            />
            <p className="text-red-500 mt-4 text-base">
              {errors.message?.message}
            </p>
          </div>
          <div>
            <label htmlFor="type" className="sr-only">
              Typ
            </label>
            <select
              {...register('type')}
              placeholder="Typ"
              className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
            >
              {commentTypesEnum?.map((type) => (
                <option key={type.key} value={type.key}>
                  {type.enumTypeName}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className={clsx([
              'w-full p-4 pr-12 mt-4 text-sm font-medium text-white bg-blue-500 rounded-lg',
              !isValid && ' bg-gray-500',
            ])}
            disabled={!isValid}
          >
            Dodaj komentarz
          </button>
        </form>
      </div>
    </>
  );
};
