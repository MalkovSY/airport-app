import React, {useState} from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, ImageBackground } from 'react-native';

import { departListItemStyle } from './DepartListItem.style';

export default function DepartListItem( { navigation, likedFligths, data, onLiked } ) {
 

const likeDislike = (item) => {
  let way = '';
  item.like ? way = require('../../assets/icons/likePng.png') : way = require('../../assets/icons/dislikePng.png') ;
  return way;
}

return ( 
    <View>
      <FlatList data={likedFligths} renderItem={({item}) => (
        <TouchableOpacity style = {departListItemStyle.main} onPress={() => navigation.navigate('Flight', item)}>
          <ImageBackground 
                          resizeMode="cover"
                          source={require("../../assets/icons/planeBg.png")}
                          style={departListItemStyle.imageBg}
                          >
          <Image style={departListItemStyle.image}
                 source={require("../../assets/icons/plane.png")}/>
                 </ImageBackground>
        <View style={departListItemStyle.item}>
          <Text style = {departListItemStyle.title}>{item.from}   -   {item.to}</Text>
          <Text style = {departListItemStyle.descr}>{item.airport}  -  {item.date}  -  {item.time}</Text>
          <Text style = {departListItemStyle.descr}>{item.comp}</Text>
          <View style = {departListItemStyle.price}>
            <Text style = {departListItemStyle.priceDescr}>Price:</Text>
            <Text style = {departListItemStyle.priceTitle}>{item.price}</Text>
          </View>
        </View>
        <TouchableOpacity style={departListItemStyle.like} onPress={() => onLiked(item.key)}>
          <Image style={departListItemStyle.like}
                 source={likeDislike(item)}/>
        </TouchableOpacity>
        </TouchableOpacity>
      )}/>
    </View>
  )

};
