import React, {Component} from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, ScrollView, Dimensions, StyleSheet } from 'react-native';


import { flightStyle } from './Flight.style';

const {width} = Dimensions.get('window');
const height = width * 0.53; 

const carouselSource = [
  require('../../assets/carousel/1.png'),
  require('../../assets/carousel/2.png'),
  require('../../assets/carousel/3.png'),
  require('../../assets/carousel/4.png'),
  require('../../assets/carousel/5.png')
];

export default function Flight({ route, navigation }) {
  const goBack = () => {
    navigation.goBack()
  }

return ( 
    <View style = {flightStyle.main}>
      <TouchableOpacity style={flightStyle.header}
                        onPress={goBack}>
        <ImageBackground  
                          resizeMode="cover"
                          source={require("../../assets/bg/elem-bg.jpg")}
                          style={flightStyle.imageBg}/>
      </TouchableOpacity>
      <View style={ flightStyle.flight }>
        <View style={ flightStyle.from }>
          <Text style={ flightStyle.descr }>{route.params.date}</Text>
          <Text style={ flightStyle.airport }>{route.params.airport}</Text>
          <Text style={ flightStyle.descr }>{route.params.from}</Text>
        </View>
        <Image style={flightStyle.arrowR}
               source={require("../../assets/icons/arrowR.png")}/>
        <View style={ flightStyle.to }>
          <Text style={ flightStyle.descr }>{route.params.date}</Text>
          <Text style={ flightStyle.airport }>{route.params.airportTo}</Text>
          <Text style={ flightStyle.descr }>{route.params.to}</Text>
        </View>
      </View>
      <View style={flightStyle.priceBoard}>
        <View style={flightStyle.priceT}>
          <Text style={{color: 'white', fontSize: 13}}>Price</Text>
          <Text style={{color: 'white', fontSize: 20}}>{route.params.price}₽</Text>
        </View>
        <View style={flightStyle.boarding}>
          <Text style={{color: 'white', fontSize: 13}}>Boarding</Text>
          <Text style={{color: 'white', fontSize: 20}}>{route.params.time}</Text>
        </View>
      </View>
      <View style={carousel.container}>
        <ScrollView 
          showsHorizontalScrollIndicator={false}
          horizontal
          style={carousel.scroll}>
          {
            carouselSource.map((img, index) => (
              <Image 
                key={index}
                source={img}
                style={carousel.png}/>
            ))
          }
        </ScrollView>
      </View>
    </View>
  )
  
};

const carousel = StyleSheet.create({
  container:{
    width, 
    height,
    marginTop: 15,
  },
  scroll: {
    width, 
    height,
  },
  png: {
    width: 140, 
    height, 
    resizeMode: 'contain'
  }
})