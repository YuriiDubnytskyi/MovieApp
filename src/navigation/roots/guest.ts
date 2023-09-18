import { SCREEN } from '../../constants/navication';

const layout = {
  root: {
    stack: {
      children: [
        {
          component: {
            name: SCREEN.AUTH.LOGIN,
          },
        },
      ],
    },
  },
};

export default layout;
