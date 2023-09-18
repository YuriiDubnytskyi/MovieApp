import './RegisterScreens';
import { setInitialNavigationStack } from './helpers';

export const InitNavigation = async (): Promise<void> => {
  await setInitialNavigationStack();
};
