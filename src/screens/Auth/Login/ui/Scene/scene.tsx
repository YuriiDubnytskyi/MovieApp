import React, { useCallback } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import type { NavigationFunctionComponent } from 'react-native-navigation';
import Container from '../../../../../components/Container';
import HomeNavigation from '../../../../../navigation/navigators';
import styles from './styles';
import { useTranslation } from 'react-i18next';
import { LoginForm } from '../Form';
import { defaultValues, useLoginForm } from '../../model/use-login-form';

const Scene: NavigationFunctionComponent = ({ componentId }) => {
  const { t } = useTranslation('login');
  const form = useLoginForm();

  const goToRegisterScreen = useCallback(() => {
    HomeNavigation.goToRegistration(componentId);
    form.reset(defaultValues);
    form.clearErrors();
  }, [componentId, form]);

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <Container>
        <View style={styles.login}>
          <Image
            style={styles.icon}
            resizeMode="contain"
            source={require('../../../../../assets/images/logo.jpg')}
          />
          <Text style={styles.title}>{t('title')}</Text>
          <Text style={styles.description}>{t('description')}</Text>
          <LoginForm form={form} componentId={componentId} />
          <TouchableOpacity
            style={{ width: '100%' }}
            activeOpacity={0.5}
            onPress={goToRegisterScreen}
          >
            <Text style={styles.registerLink}>{t('registerAccount')}</Text>
          </TouchableOpacity>
        </View>
      </Container>
    </ScrollView>
  );
};

Scene.options = { topBar: { visible: false } };

export { Scene };
