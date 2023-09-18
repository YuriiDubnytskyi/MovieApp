import { StyleSheet } from 'react-native';
import { isIOS } from '../../../../../../constants/react';

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    display: 'flex',
    flex: 1,
  },
  label: {
    color: 'black',
    fontWeight: '500',
    paddingBottom: 3,
    paddingLeft: 20,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  input: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  add: {
    backgroundColor: '#037B3E',
    width: 50,
    height: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
    margin: 'auto',
    color: 'white',
    borderRadius: isIOS ? 15 : 20,
    overflow: 'hidden',
    paddingTop: isIOS ? 5 : 0,
  },
  delete: {
    marginLeft: 10,
    marginTop: 20,
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
});
