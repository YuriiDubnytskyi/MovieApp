import { StyleSheet } from 'react-native';
import { hp } from '../../helpers/responsive';
import { HP_ONE_DP } from '../../constants/styles';

export default StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: '#4EADFE',
    borderRadius: 200,
    height: hp(HP_ONE_DP * 50),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: 'white',
    fontWeight: '500',
    textAlign: 'center',
  },
});
