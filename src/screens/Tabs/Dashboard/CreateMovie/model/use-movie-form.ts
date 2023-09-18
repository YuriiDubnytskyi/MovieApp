import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import * as yup from 'yup';

const validationSchema = yup.object({
  title: yup.string().required('ruleCannotBeEmpty'),
  year: yup
    .number()
    .typeError('ruleNumber')
    .min(1895, 'ruleIncorectMinYear')
    .max(2023, 'ruleIncorectMaxYear')
    .required('ruleCannotBeEmpty'),
  format: yup.string().oneOf(['DVD', 'VHS', 'Blu-ray']).required().nullable(),
  actors: yup
    .array()
    .min(1)
    .of(yup.object({ name: yup.string().required('ruleCannotBeEmpty') }))
    .required('ruleCannotBeEmpty'),
});

export const defaultValues = {
  title: '',
  year: 0,
  format: null,
  actors: [{ name: '' }],
};

export const useMovieForm = () => {
  const form = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'actors',
  });

  const handleAdd = useCallback(() => {
    append({ name: '' });
  }, [append]);

  const handleRemove = useCallback(
    (index: number) => {
      remove(index);
    },
    [remove],
  );

  return { form, handleAdd, handleRemove, fields };
};
