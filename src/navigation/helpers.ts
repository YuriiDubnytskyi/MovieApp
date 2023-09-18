import type { Layout } from 'react-native-navigation';
import { Navigation } from 'react-native-navigation';
import type { DebouncedFunc } from 'lodash';
import _ from 'lodash';
import GuestRoot from './roots/guest';
import initial from './roots/initial';
import UserRoot from './roots/user';

/**
 * Push screen to navigation stack
 */
export const pushScreen: DebouncedFunc<
  (componentId: string, options: any, layoutOptions: any) => Promise<string>
> = _.throttle(
  async (
    componentId: string,
    options: any,
    layoutOptions: any,
  ): Promise<string> =>
    await Navigation.push(
      componentId,
      _.merge(
        {
          component: layoutOptions,
        },
        options,
      ) as Layout<unknown>,
    ),
  500,
  { leading: true, trailing: false },
);

export const setAuthorizedNavigationStack = async (
  isAuthorized: boolean,
  needToReAuthenticate?: boolean,
): Promise<string> =>
  await Navigation.setRoot(
    isAuthorized && !needToReAuthenticate ? UserRoot : GuestRoot,
  );

export const setInitialNavigationStack = async (): Promise<string> =>
  await Navigation.setRoot(initial);
