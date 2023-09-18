import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import {
  Navigation,
  type NavigationFunctionComponent,
} from 'react-native-navigation';
import Button from '../../../components/Button';
import Container from '../../../components/Container';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_SESSION_TOKEN } from '../../../constants/storage';
import HomeNavigation from '../../../navigation/navigators';
import styles from './styles';

const Profile: NavigationFunctionComponent = ({ componentId }) => {
  const { t } = useTranslation('profile');

  const handleLogOut = useCallback(() => {
    AsyncStorage.removeItem(STORAGE_SESSION_TOKEN);
    HomeNavigation.goToInitials(componentId);
  }, [componentId]);

  useEffect(() => {
    Navigation.mergeOptions(componentId, {
      topBar: {
        title: {
          text: t('header'),
          alignment: 'center',
        },
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <View style={styles.container}>
        <Text>{t('welcome', { name: 'User' })}</Text>
        <Button loader={false} onPress={handleLogOut} label={t('logOut')} />
      </View>
    </Container>
  );
};

export default Profile;
