import { StyleSheet } from 'react-native';
import { hp, wp } from '../../helpers/responsive';
import { HP_ONE_DP, WP_ONE_DP } from '../../constants/styles';

export default StyleSheet.create({
  container: {
    paddingVertical: hp(HP_ONE_DP * 5),
  },
  input: {
    width: '100%',
    backgroundColor: 'white',
    padding: hp(HP_ONE_DP * 10),
    borderRadius: 200,
    paddingLeft: wp(WP_ONE_DP * 20),
    borderWidth: 1,
    borderColor: '#efecec',
  },
  errorBorder: {
    borderColor: '#F4525C',
  },
  error: {
    fontSize: 12,
    color: '#F4525C',
    paddingLeft: wp(WP_ONE_DP * 20),
  },
  label: {
    color: 'black',
    fontWeight: '500',
    paddingBottom: hp(WP_ONE_DP * 3),
    paddingLeft: wp(WP_ONE_DP * 20),
  },
});
