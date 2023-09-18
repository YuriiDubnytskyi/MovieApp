import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {
  Navigation,
  type NavigationFunctionComponent,
} from 'react-native-navigation';
import Button from '../../../components/Button';
import Container from '../../../components/Container';
import styles from './styles';
import HomeNavigation from '../../../navigation/navigators';

import { NAVIGATION_TABS } from '../../../constants/navication';
import { isIOS } from '../../../constants/react';
import { importMovies } from '../../../api/api';
import { showMessage } from 'react-native-flash-message';
import FlashMessage from 'react-native-flash-message';

const Dashboard: NavigationFunctionComponent = ({ componentId }) => {
  const { t } = useTranslation('dashboard');

  const handleGoToMoviest = useCallback(() => {
    Navigation.popToRoot(NAVIGATION_TABS.MOVIES);
    Navigation.mergeOptions(componentId, {
      bottomTabs: {
        currentTabId: NAVIGATION_TABS.MOVIES,
      },
    });
  }, [componentId]);

  const handleGoToAddMovie = useCallback(() => {
    HomeNavigation.goToCreateMovie(componentId);
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

  const onPressImport = async () => {
    try {
      const getFile = await DocumentPicker.pick({
        type: 'text/plain',
      });
      console.log(getFile);
      const data = new FormData();

      data.append('movies', {
        type: getFile[0].type,
        name: getFile[0].name,
        uri: isIOS ? getFile[0].uri.replace('file://', '') : getFile[0].uri,
      } as any);

      await importMovies(data);

      showMessage({
        message: 'File imported succesfully',
        type: 'success',
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <View style={styles.container}>
        <View>
          <Text>{t('welcome')}</Text>
          <Text>{t('description')}</Text>

          <View style={styles.import}>
            <Text>{t('importFilms')}</Text>
            <TouchableOpacity onPress={onPressImport}>
              <Image
                style={styles.icon}
                resizeMode="contain"
                source={require('../../../assets/images/import.jpg')}
              />
            </TouchableOpacity>
          </View>
          <Text style={{ textAlign: 'center' }}>{t('or')}</Text>
          <Button
            loader={false}
            onPress={handleGoToAddMovie}
            label={t('addFilm')}
          />
        </View>
        <Button
          loader={false}
          onPress={handleGoToMoviest}
          label={t('goToMovies')}
        />
      </View>
      <FlashMessage position="top" />
    </Container>
  );
};

export default Dashboard;
