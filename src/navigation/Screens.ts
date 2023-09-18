/**
 * Register all application screens
 */

import { SCREEN } from '../constants/navication';
import { Login } from '../screens/Auth/Login';
import { SignUp } from '../screens/Auth/SignUp';
import Initial from '../screens/Initial';
import Dashboard from '../screens/Tabs/Dashboard';
import { CreateMovie } from '../screens/Tabs/Dashboard/CreateMovie';
import Movie from '../screens/Tabs/Movie';
import MovieDetails from '../screens/Tabs/Movie/MovieDetails';
import Profile from '../screens/Tabs/Profile';

const Screens = new Map();

Screens.set(SCREEN.INITIAL, Initial);
Screens.set(SCREEN.AUTH.LOGIN, Login);
Screens.set(SCREEN.AUTH.REGISTRATION, SignUp);
Screens.set(SCREEN.DASHBOARD.HOME, Dashboard);
Screens.set(SCREEN.DASHBOARD.CREATE_MOVIE, CreateMovie);
Screens.set(SCREEN.MOVIES.HOME, Movie);
Screens.set(SCREEN.MOVIES.DETAILS, MovieDetails);
Screens.set(SCREEN.PROFILE.HOME, Profile);

export default Screens;
