import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup.string().email('ruleIncorectEmail').required('ruleCannotBeEmpty'),
  password: yup
    .string()
    .min(8, 'ruleMin8Characters')
    .required('ruleCannotBeEmpty'),
});

export const defaultValues = {
  email: '',
  password: '',
};

export const useLoginForm = () => {
  return useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });
};
