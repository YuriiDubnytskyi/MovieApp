import type { ComponentType } from 'react';
import React, { Suspense } from 'react';

import { Text } from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';
import Inactive from '../components/Inactive';

/**
 * Screen wrapper. Add providers and other wrappers.
 */
export default (
  Component: ComponentType,
  isEnableGesture = true,
): ComponentType => {
  const GestureComponent = gestureHandlerRootHOC(Component);

  return props => (
    <Suspense fallback={<Text>...</Text>}>
      <I18nextProvider i18n={i18n}>
        <Inactive>
          {(isEnableGesture && <GestureComponent {...props} />) || (
            <Component {...props} />
          )}
        </Inactive>
      </I18nextProvider>
    </Suspense>
  );
};
