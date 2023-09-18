import { StyleSheet } from 'react-native';
import { isIOS } from '../../../constants/react';

export default StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  delete: {
    backgroundColor: '#D51F35',
    width: 50,
    height: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    borderRadius: isIOS ? 15 : 20,
    overflow: 'hidden',
    paddingTop: isIOS ? 5 : 0,
  },
  viewMore: {
    color: '#4EADFE',
    fontWeight: '500',
    textAlign: 'center',
    paddingTop: 20,
  },
  noData: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
});
