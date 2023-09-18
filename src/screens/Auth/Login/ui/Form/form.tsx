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
import { login } from '../../../../../api/api';

const LoginForm = ({ form, componentId }) => {
  const {
    control,
    formState: { errors, isDirty, isValid },
    handleSubmit,
  } = form;
  const { t } = useTranslation('login');

  const onSubmit = useCallback(
    async fields => {
      const loginResponse = await login(fields);

      AsyncStorage.setItem(
        STORAGE_SESSION_TOKEN,
        JSON.stringify(loginResponse.data.token),
      );

      HomeNavigation.goToInitials(componentId);
    },
    [componentId],
  );

  return (
    <View style={style.form}>
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
      <Button
        loader={false}
        onPress={handleSubmit(onSubmit)}
        label={t('login')}
        disabled={!isDirty || !isValid}
      />
    </View>
  );
};

export { LoginForm };
