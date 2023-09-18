import type { ComponentType } from 'react';
import { Navigation } from 'react-native-navigation';

import ComponentWrapper from './ComponentWrapper';
import Screens from './Screens';

Screens.forEach((Component, componentName: string | number) => {
  const isArray = Array.isArray(Component);

  if (isArray) {
    return Navigation.registerComponent(componentName, () =>
      ComponentWrapper(...(Component as [ComponentType])),
    );
  }

  return Navigation.registerComponent(
    componentName,
    () => ComponentWrapper(Component as ComponentType),
    () => Component as ComponentType,
  );
});
