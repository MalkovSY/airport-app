import { StyleSheet} from 'react-native';

export const departListItemStyle = StyleSheet.create({
  main: {
    flex: 1,
    padding: 20,
    width: 335,
    height: 140,
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    marginLeft: '5%',
    marginTop: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
      },
  item:{
    marginLeft: 20,
    width: 200,
  },
  price: {
    textAlign: 'center'
  },
  title: {
    fontFamily: 'abel',
    fontSize: 17,
    lineHeight: 22
  },
  descr: {
    fontFamily: 'rw-light',
    fontSize: 13,
    lineHeight: 22,
    color: '#878787'
  },
  price: {
    borderTopWidth: 0.5,
    borderTopColor: 'rgba(196, 196, 196, 0.5)',
    marginTop: 15,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  priceDescr: {
    fontFamily: 'abel',
    fontSize: 11,
    lineHeight: 22,
    color: '#878787'
  },
  priceTitle:{
    marginLeft: 8,
    fontSize: 17,
    lineHeight: 22,
  },
  image: {
    width: 34, 
    height: 34,
    // marginTop: '22%',
    // marginLeft: '20%',
    backgroundColor: 'rgba(0, 119, 255, 0.05)',
    
  },
  imageBg:{
    width: 60, 
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  like: {
    width: 18, 
    height: 16,
  }

});