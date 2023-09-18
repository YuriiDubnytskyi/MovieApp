import React, { useCallback } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import type { NavigationFunctionComponent } from 'react-native-navigation';
import Container from '../../../../../components/Container';
import HomeNavigation from '../../../../../navigation/navigators';
import styles from './styles';
import { useTranslation } from 'react-i18next';
import { SignUpForm } from '../Form';
import { defaultValues, useSignUpForm } from '../../model/use-sign-up-form';

const Scene: NavigationFunctionComponent = ({ componentId }) => {
  const { t } = useTranslation('signUp');
  const form = useSignUpForm();

  const goToLoginScreen = useCallback(() => {
    HomeNavigation.goToLogin(componentId);
    form.reset(defaultValues);
    form.clearErrors();
  }, [componentId, form]);

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <Container>
        <View style={styles.signUp}>
          <Image
            style={styles.icon}
            resizeMode="contain"
            source={require('../../../../../assets/images/logo.jpg')}
          />
          <Text style={styles.title}>{t('title')}</Text>
          <Text style={styles.description}>{t('description')}</Text>
          <SignUpForm form={form} componentId={componentId} />
          <TouchableOpacity
            style={{ width: '100%' }}
            activeOpacity={0.5}
            onPress={goToLoginScreen}
          >
            <Text style={styles.loginLink}>{t('hevAccount')}</Text>
          </TouchableOpacity>
        </View>
      </Container>
    </ScrollView>
  );
};

Scene.options = { topBar: { visible: false } };

export { Scene };
