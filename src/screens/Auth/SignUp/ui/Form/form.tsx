import { View } from 'react-native';

import React, { useCallback } from 'react';
import style from './style';
import { Controller } from 'react-hook-form';
import Input from '../../../../../components/Input';
import Button from '../../../../../components/Button';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_SESSION_TOKEN } from '../../../../../constants/storage';
import HomeNavigation from '../../../../../navigation/navigators';
import { register } from '../../../../../api/api';

const SignUpForm = ({ form, componentId }) => {
  const {
    control,
    formState: { errors, isDirty, isValid },
    handleSubmit,
  } = form;
  const { t } = useTranslation('signUp');

  const onSubmit = useCallback(
    async fields => {
      const registerResponse = await register(fields);

      AsyncStorage.setItem(
        STORAGE_SESSION_TOKEN,
        JSON.stringify(registerResponse.data.token),
      );

      HomeNavigation.goToInitials(componentId);
    },
    [componentId],
  );

  return (
    <View style={style.form}>
      <Controller
        name="name"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            value={value}
            onChangeText={onChange}
            error={!!errors?.name?.message}
            placeholder={t('name')}
            label={t('name')}
            errorMessage={t(`errors:${errors?.name?.message}`)}
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            value={value}
            onChangeText={onChange}
            error={!!errors?.email?.message}
            placeholder={t('email')}
            label={t('email')}
            errorMessage={t(`errors:${errors?.email?.message}`)}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            value={value}
            onChangeText={onChange}
            secureTextEntry={true}
            placeholder={t('password')}
            label={t('password')}
            error={!!errors?.password?.message}
            errorMessage={t(`errors:${errors?.password?.message}`)}
          />
        )}
      />
      <Controller
        name="confirmPassword"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            value={value}
            onChangeText={onChange}
            secureTextEntry={true}
            placeholder={t('confirmPassword')}
            label={t('confirmPassword')}
            error={!!errors?.confirmPassword?.message}
            errorMessage={t(`errors:${errors?.confirmPassword?.message}`)}
          />
        )}
      />
      <Button
        loader={false}
        onPress={handleSubmit(onSubmit)}
        label={t('register')}
        disabled={!isDirty || !isValid}
      />
    </View>
  );
};

export { SignUpForm };
