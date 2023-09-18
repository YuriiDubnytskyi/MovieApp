import React from 'react';
import {
  TextInput,
  TextInputProps,
  View,
  Text,
  StyleProp,
  TextStyle,
} from 'react-native';
import styles from './styles';

interface IInputProps {
  error?: boolean | null;
  inputStyles?: StyleProp<TextStyle>;
  editable?: boolean;
  errorMessage?: string | null;
  label?: string;
}

const Input = ({
  error = null,
  inputStyles = {},
  editable = true,
  errorMessage,
  label,
  ...props
}: TextInputProps & IInputProps) => (
  <View
    pointerEvents={editable ? 'auto' : 'none'}
    style={[props.style, styles.container]}
  >
    {label && <Text style={styles.label}>{label}</Text>}
    <TextInput
      {...props}
      style={[styles.input, !!error && styles.errorBorder, inputStyles]}
    />
    {error && <Text style={styles.error}>{errorMessage}</Text>}
  </View>
);

export default Input;
