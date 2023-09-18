import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import {
  Navigation,
  type NavigationFunctionComponent,
} from 'react-native-navigation';
import styles from './styles';
import Container from '../../../../components/Container';
import { ContentActivityIndicator } from '../../../../components/ContentActivityIndicator';
import { getMovieById } from '../../../../api/api';

const MovieDetails: NavigationFunctionComponent = ({ componentId, id }) => {
  const { t } = useTranslation('movieDetails');

  const [information, setInformation] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovieById(id)
      .then(({ data }) => setInformation(data.data))
      .finally(() => setLoading(false));
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

  if (loading) {
    return <ContentActivityIndicator />;
  }

  return (
    <Container>
      <View style={styles.container}>
        <Text>{information?.title}</Text>
        <Text>{information?.year}</Text>
        <Text>{information?.format}</Text>
        <Text>{t('list')}</Text>
        {information?.actors?.map(el => (
          <Text key={el.id}>{el.name}</Text>
        ))}
      </View>
    </Container>
  );
};

export default MovieDetails;
