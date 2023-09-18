import React, { useEffect } from 'react';

import type { NavigationFunctionComponent } from 'react-native-navigation';
import { setAuthorizedNavigationStack } from '../../navigation/helpers';
import { ContentActivityIndicator } from '../../components/ContentActivityIndicator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_SESSION_TOKEN } from '../../constants/storage';
import FlashMessage from 'react-native-flash-message';

const Initial: NavigationFunctionComponent = () => {
  useEffect(() => {
    checkAndSetSessionToken();
  }, []);

  const checkAndSetSessionToken = async () => {
    await AsyncStorage.getItem(STORAGE_SESSION_TOKEN).then(value =>
      value
        ? setAuthorizedNavigationStack(true)
        : setAuthorizedNavigationStack(false),
    );
  };

  return (
    <>
      <ContentActivityIndicator />
      <FlashMessage position="top" />
    </>
  );
};

Initial.options = { topBar: { visible: false } };

export default Initial;
