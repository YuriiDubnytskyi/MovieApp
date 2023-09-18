import React from 'react';

import { ActivityIndicator, ColorValue, View } from 'react-native';

import { styles } from './styles';

interface IContentActivityIndicator {
  size?: number | 'small' | 'large';
  color?: ColorValue;
}

export const ContentActivityIndicator = ({
  size = 'large',
  color = 'blue',
}: IContentActivityIndicator): JSX.Element => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator animating size={size} color={color} />
    </View>
  );
};
