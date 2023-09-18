import { pushScreen } from './helpers';
import { SCREEN } from '../constants/navication';

export default {
  goToRegistration: async (
    componentId: string,
    screenProps = {},
    options = {},
  ): Promise<string | undefined> =>
    await pushScreen(componentId, options, {
      name: SCREEN.AUTH.REGISTRATION,
      passProps: screenProps,
    }),

  goToLogin: async (
    componentId: string,
    screenProps = {},
    options = {},
  ): Promise<string | undefined> =>
    await pushScreen(componentId, options, {
      name: SCREEN.AUTH.LOGIN,
      passProps: screenProps,
    }),

  goToDashboard: async (
    componentId: string,
    screenProps = {},
    options = {},
  ): Promise<string | undefined> =>
    await pushScreen(componentId, options, {
      name: SCREEN.DASHBOARD.HOME,
      passProps: screenProps,
    }),

  goToProfile: async (
    componentId: string,
    screenProps = {},
    options = {},
  ): Promise<string | undefined> =>
    await pushScreen(componentId, options, {
      name: SCREEN.PROFILE.HOME,
      passProps: screenProps,
    }),

  goToMovies: async (
    componentId: string,
    screenProps = {},
    options = {},
  ): Promise<string | undefined> =>
    await pushScreen(componentId, options, {
      name: SCREEN.MOVIES.HOME,
      passProps: screenProps,
    }),

  goToInitials: async (
    componentId: string,
    screenProps = {},
    options = {},
  ): Promise<string | undefined> =>
    await pushScreen(componentId, options, {
      name: SCREEN.INITIAL,
      passProps: screenProps,
    }),

  goToCreateMovie: async (
    componentId: string,
    screenProps = {},
    options = {},
  ): Promise<string | undefined> =>
    await pushScreen(componentId, options, {
      name: SCREEN.DASHBOARD.CREATE_MOVIE,
      passProps: screenProps,
    }),

  goToMovieDetails: async (
    componentId: string,
    screenProps = {},
    options = {},
  ): Promise<string | undefined> =>
    await pushScreen(componentId, options, {
      name: SCREEN.MOVIES.DETAILS,
      passProps: screenProps,
    }),
};
