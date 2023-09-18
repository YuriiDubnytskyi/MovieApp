import type { LayoutRoot } from 'react-native-navigation';
import { NAVIGATION_TABS, SCREEN } from '../../constants/navication';

const layout: LayoutRoot = {
  root: {
    bottomTabs: {
      id: 'BOTTOM_TABS_LAYOUT',
      children: [
        {
          stack: {
            id: NAVIGATION_TABS.DASHBOARD_HOME_TAB,
            children: [
              {
                component: {
                  id: 'DASHBOARD_HOME_COMPONENT',
                  name: SCREEN.DASHBOARD.HOME,
                },
              },
            ],
            options: {
              bottomTab: {
                text: 'Dashboard',
                icon: require('./../../assets/images/dashboard.jpg'),
                iconHeight: 24,
                iconWidth: 24,
              },
              layout: {
                backgroundColor: '#F6F6F6',
                componentBackgroundColor: '#F6F6F6',
              },
            },
          },
        },
        {
          stack: {
            id: NAVIGATION_TABS.MOVIES,
            children: [
              {
                component: {
                  id: 'MOVIES_HOME_COMPONENT',
                  name: SCREEN.MOVIES.HOME,
                },
              },
            ],
            options: {
              bottomTab: {
                text: 'Movies',
                icon: require('./../../assets/images/movies.jpg'),
                iconHeight: 24,
                iconWidth: 24,
              },
              layout: {
                backgroundColor: '#F6F6F6',
                componentBackgroundColor: '#F6F6F6',
              },
            },
          },
        },
        {
          stack: {
            id: NAVIGATION_TABS.PROFILE_HOME_TAB,
            children: [
              {
                component: {
                  id: 'PROFILE_HOME_COMPONENT',
                  name: SCREEN.PROFILE.HOME,
                },
              },
            ],
            options: {
              bottomTab: {
                text: 'Profile',
                icon: require('./../../assets/images/profile.jpg'),
                iconHeight: 24,
                iconWidth: 24,
              },
              layout: {
                backgroundColor: '#F6F6F6',
                componentBackgroundColor: '#F6F6F6',
              },
            },
          },
        },
      ],
    },
  },
};

export default layout;
