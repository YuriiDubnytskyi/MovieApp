import { StyleSheet } from 'react-native';
import { wp } from '../../helpers/responsive';
import { WP_ONE_DP } from '../../constants/styles';

export default StyleSheet.create({
  container: {
    paddingLeft: wp(WP_ONE_DP * 20),
    paddingRight: wp(WP_ONE_DP * 20),
  },
});
