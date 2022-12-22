import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { CommentType } from '../../../../api-types/api';
import useMutationCreateComment from '../../../../data-access-layer/mutations/use-mutation-create-comment';
import useQueryGetEnumType from '../../../../data-access-layer/queries/use-query-get-enum-type';
import { LoadingOverlay } from '../../../../common-components/loading-overlay/loading-overlay';
import { FormInput } from '../../../../common-components/inputs/form-input/form-input';
import { FormSelectForEnumInput } from '../../../../common-components/inputs/form-select-for-enum-input/form-select-for-enum-input';
import { Button } from '../../../../common-components/buttons/button/button';

const commentFormSchema = Yup.object({
  title: Yup.string().required('Tytuł jest wymagany.'),
  message: Yup.string().required('Wiadomość jest wymagana.'),
  date: Yup.string().required('Data jest wymagana.'),
  author: Yup.string().required('Autor jest wymagany.'),
  type: Yup.mixed<CommentType>().required('Typ jest wymagany.'),
});

type CommentFormType = Yup.InferType<typeof commentFormSchema>;

export const FormContent = () => {
  const { data = [], isLoading: isEnumLoading } = useQueryGetEnumType();
  const { mutate, isLoading: isMutationLoading } = useMutationCreateComment();

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

  const onSubmit: SubmitHandler<CommentFormType> = (data) => {
    mutate({
      title: data.title,
      message: data.message,
      date: data.date,
      author: data.author,
      type: +data.type as CommentType,
    });
  };

  return (
    <>
      <LoadingOverlay isLoading={isEnumLoading || isMutationLoading} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto mt-8 mb-0 space-y-4"
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
          label="Wiadomość"
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
          data={data}
          register={register('type')}
          fieldName="type"
          label="Typ"
        />
        <Button text="Dodaj komentarz" type="submit" disabled={!isValid} />
      </form>
    </>
  );
};
