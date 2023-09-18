import React, { useMemo } from 'react';
import { useCallback } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import type { ChipsValue, ChipsVariant } from '../types';
import { deriveIconColor } from './helperDeriveIconColor';

interface ChipsButtonProps {
  selected: boolean;
  label: string;
  value: ChipsValue;
  onPress: (value: ChipsValue) => void;
  isLast: boolean;
  variant: ChipsVariant;
  disabled: boolean;
  direction?: string;
}

/**
 * ChipsButton
 */
const ChipsButton = ({
  selected,
  value,
  onPress,
  isLast,
  label,
  variant,
  disabled,
  direction,
}: ChipsButtonProps): JSX.Element => {
  const handlePress = useCallback(() => onPress(value), [value, onPress]);

  const iconColor = deriveIconColor(variant);

  const chipsStyles = useMemo(
    () => [
      styles.chips as StyleProp<ViewStyle>,
      styles[`${variant}Chips`] as StyleProp<ViewStyle>,
      selected &&
        ([
          styles.selectedChips,
          styles[`${variant}SelectedChips`],
        ] as StyleProp<ViewStyle>),
    ],
    [selected, variant],
  );

  const textStyles = useMemo(
    () => [styles[`${variant}ChipsText`] as StyleProp<ViewStyle>],
    [variant],
  );

  return (
    <View
      style={[
        styles.container,
        isLast && styles[`${direction}Direction`],
        disabled && styles.disabledBackgroundChips,
      ]}
    >
      <TouchableOpacity
        disabled={disabled}
        onPress={handlePress}
        style={chipsStyles}
      >
        {selected && (
          <View style={styles.iconContainer}>
            <Text style={{ color: iconColor }}>✓</Text>
          </View>
        )}
        <Text style={textStyles}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChipsButton;
