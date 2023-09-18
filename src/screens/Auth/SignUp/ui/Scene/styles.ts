import { StyleSheet } from 'react-native';
import { hp, wp } from '../../../../../helpers/responsive';
import { HP_ONE_DP, WP_ONE_DP } from '../../../../../constants/styles';

export default StyleSheet.create({
  signUp: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: hp(HP_ONE_DP * 20),
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    opacity: 0.7,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    opacity: 0.5,
    paddingLeft: wp(WP_ONE_DP * 20),
    paddingRight: wp(WP_ONE_DP * 20),
    textAlign: 'center',
  },
  loginLink: {
    color: '#4EADFE',
    fontWeight: '500',
    textAlign: 'center',
    paddingTop: hp(HP_ONE_DP * 20),
    paddingBottom: 20,
  },
});
