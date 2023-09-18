import React, { ReactNode } from 'react';
import { View } from 'react-native';
import styles from './styles';

interface IContainerProps {
  children: ReactNode;
}

const Container = ({ children }: IContainerProps) => (
  <View style={styles.container}>{children}</View>
);

export default Container;
