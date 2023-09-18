import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup.string().email('ruleIncorectEmail').required('ruleCannotBeEmpty'),
  name: yup.string().required('ruleCannotBeEmpty'),
  password: yup
    .string()
    .min(8, 'ruleMin8Characters')
    .required('ruleCannotBeEmpty'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), undefined], 'passwordMatches')
    .required('ruleCannotBeEmpty'),
});

export const defaultValues = {
  email: '',
  name: '',
  confirmPassword: '',
  password: '',
};

export const useSignUpForm = () => {
  const form = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const {
    watch,
    trigger,
    formState: { dirtyFields },
  } = form;

  const isConfirmDirty = dirtyFields.confirmPassword;

  useEffect(() => {
    const subscription = watch((_, { name, type }) => {
      if (!isConfirmDirty || !(type === 'change' && name === 'password')) {
        return;
      }

      if (isConfirmDirty) {
        void trigger('confirmPassword');
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, trigger, isConfirmDirty]);

  return form;
};
