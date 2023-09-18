/* eslint-disable react/no-unstable-nested-components */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FlatList,
  RefreshControl,
  Alert,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  Navigation,
  type NavigationFunctionComponent,
} from 'react-native-navigation';
import Container from '../../../components/Container';
import styles from './styles';
import Input from '../../../components/Input';
import HomeNavigation from '../../../navigation/navigators';
import { useGetMovies } from './use-get-movies';
import { ContentActivityIndicator } from '../../../components/ContentActivityIndicator';
import { deleteMovie } from '../../../api/api';
import FlashMessage from 'react-native-flash-message';

const Movie: NavigationFunctionComponent = ({ componentId }) => {
  const { t } = useTranslation('movie');

  const [value, setValue] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const { loading, getData, data } = useGetMovies();

  const flashMessageRef = useRef(null);

  const handleDelete = async id => {
    await deleteMovie(id);
    flashMessageRef?.current?.showMessage({
      message: 'Movie deleted',
      type: 'success',
    });
  };

  const handleAlertDelete = id =>
    Alert.alert('Delete', 'Are you sure to delete a movie from list?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      { text: 'Delete', onPress: () => handleDelete(id) },
    ]);

  const handleGoToDetails = useCallback(
    (id: string) => {
      HomeNavigation.goToMovieDetails(componentId, { id });
    },
    [componentId],
  );

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await getData('').finally(() => setRefreshing(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  useEffect(() => {
    getData('');
  }, []);

  useEffect(() => {
    if (value.length > 1) {
      getData(value);
    }
  }, [value]);

  const Item = ({ title, year, format, id }) => {
    return (
      <View style={styles.container}>
        <View style={styles.movie}>
          <Text>
            {title} {year}
          </Text>
          <Text>{t('format', { format: format })}</Text>
          <Text style={styles.viewMore} onPress={() => handleGoToDetails(id)}>
            {t('viewMore')}
          </Text>
        </View>
        <TouchableOpacity onPress={() => handleAlertDelete(id)}>
          <Text style={styles.delete}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <Input value={value} onChangeText={setValue} placeholder={t('search')} />
      {loading ? (
        <ContentActivityIndicator />
      ) : (
        <Container>
          <FlatList
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            data={data}
            renderItem={({ item }) => (
              <Item
                title={item.title}
                year={item.year}
                format={item.format}
                id={item.id}
              />
            )}
            ListEmptyComponent={() => (
              <View style={styles.noData}>
                <Text>{t('noData')}</Text>
              </View>
            )}
          />
        </Container>
      )}
      <FlashMessage position="top" ref={flashMessageRef} />
    </>
  );
};

export default Movie;
