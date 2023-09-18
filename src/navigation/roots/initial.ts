import type { LayoutRoot } from 'react-native-navigation';
import { SCREEN } from '../../constants/navication';

const layout: LayoutRoot = {
  root: {
    stack: {
      children: [
        {
          component: {
            name: SCREEN.INITIAL,
          },
        },
      ],
    },
  },
};

export default layout;
