import React, { useCallback } from 'react';
import type { ViewStyle } from 'react-native';
import { View, DeviceEventEmitter } from 'react-native';

const style: ViewStyle = {
  flex: 1,
};

/**
 * Detect user inactivity
 */
const Inactive = ({ children }) => {
  const onTouch = useCallback(
    () => DeviceEventEmitter.emit('USER_ACTIVITY'),
    [],
  );

  return (
    <View
      style={style}
      pointerEvents="box-none"
      onTouchStart={onTouch}
      onTouchEnd={onTouch}
    >
      {children}
    </View>
  );
};

export default Inactive;
