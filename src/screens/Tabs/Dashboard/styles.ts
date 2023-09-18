import { StyleSheet } from 'react-native';
import { wp } from '../../../helpers/responsive';
import { WP_ONE_DP } from '../../../constants/styles';

export default StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: '100%',
    paddingVertical: 20,
  },
  icon: {
    width: 40,
    height: 50,
    marginLeft: wp(WP_ONE_DP * 20),
  },
  import: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
