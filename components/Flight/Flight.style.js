import { StyleSheet} from 'react-native';

export const flightStyle = StyleSheet.create({
  main: {
    flex: 1,
    textAlign: 'center',
    marginBottom: 20,
  },
  header: {
    height: '40%'
  },
  imageBg: {
    flex: 1,
    justifyContent: "center",
  },
  descr: {
    fontFamily: 'rw-light',
    fontSize: 13,
    lineHeight: 22,
    letterSpacing: -0.408,
    color: '#878787',
    marginTop: 5
  },
  airport: {
    fontFamily: 'abel',
    fontSize: 36,
    lineHeight: 22,
    letterSpacing: -0.408,
    color: '#404040',
    marginTop: 7
  },
  from: {
    marginLeft: 40
  },
  to: {
    marginRight: 40
  },
  flight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 50
    
  },
  arrowR: {
    width: 9,
    height: 18,
    marginTop: '10%'
  },
  priceBoard: {
    width: '90%',
    height: 90,
    flex: 1,
    backgroundColor: '#1157A7',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 10,
    marginVertical: 0,
    marginHorizontal: '5%',
  },
  priceT: {
    fontSize: 13,
    lineHeight: 22,
    letterSpacing: -0.408,
    borderRightWidth: 2,
    borderRightColor: 'white',
    paddingRight: '15%',
  },
  boarding: {
  }
});