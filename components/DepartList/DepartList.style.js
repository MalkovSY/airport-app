import { StyleSheet} from 'react-native';

export const departListStyle = StyleSheet.create({
  main: {
    flex: 1,
    padding: 20,
    textAlign: 'center',
  },
  header: {
    textAlign: 'center',
    paddingTop: 30,
    paddingBottom: 30,
    fontSize: 17,
    lineHeight: 22,
    fontFamily: 'abel'
  },
  btn:{
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  btnItem: {
    textAlign: 'center',
    width: 147,
    borderBottomWidth: 3,
    borderBottomColor: '#1157A7',
    paddingBottom: 7
  },
  btnItemText: {
    fontSize: 17,
    lineHeight: 22,
    fontFamily: 'abel',
    textAlign:'center'
  }
});