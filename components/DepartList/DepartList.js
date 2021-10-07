import React, {useState,} from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import DepartListItem from '../DepartListItem/DepartListItem';

import { departListStyle } from './DepartList.style';
import Service from '../../service/Service';

export default function DepartList( { navigation } ) {

  // const [fligths, setFlights] = useState([
    
  // ]);
  
  const [likedFligths, setLikedFligths] = useState([
    {from: 'Moscow', to: 'New York', airport: 'SVO', date: '25 June, 2020', time: '14.50', comp: 'Aeroflot', price: '23924', like: true, key: '1'},
    {from: 'Moscow', to: 'New York', airport: 'VKO', date: '26 June, 2020', time: '11.10', comp: 'Aeroflot', price: '20398', like: true, key: '2'},
    {from: 'Moscow', to: 'New York', airport: 'VKO', date: '27 June, 2020', time: '12.40', comp: 'Aeroflot', price: '24571', like: false, key: '3'},
    {from: 'Moscow', to: 'New York', airport: 'SVO', date: '28 June, 2020', time: '10.30', comp: 'Aeroflot', price: '22682', like: false, key: '4'},
    {from: 'Moscow', to: 'New York', airport: 'VKO', date: '29 June, 2020', time: '16.50', comp: 'Aeroflot', price: '20470', like: true, key: '5'},
  ]);
  
  const service = new Service();
  const res = service.getFlights();
  res
     .then ((res) => {
      setLikedFligths([res])
      })
      .catch(err => console.log(err))


  const toggle = (data, key) => {

    let index = data.findIndex((elem) => elem.key === key);
    data[index].like=!data[index].like;
    return data;

}
  
  const onLiked = (key) => {
    setLikedFligths((flys) => {
      return toggle(flys, key)
    })
  }


  const favourites = () => {
    setLikedFligths((flys)=>{
      return flys.filter(fly => fly.like);
    })
  }
  
  const browse = () => {
    setLikedFligths(()=>{
      return likedFligths
    })
  }

  console.log(likedFligths)

return ( 
  <View>
      <TouchableOpacity>
        <Text style={departListStyle.header}>Flight</Text>
        <View style={departListStyle.btn}>
          <TouchableOpacity style={departListStyle.btnItem} onPress={favourites}>
            <Text style={departListStyle.btnItemText}>Favourites</Text>
          </TouchableOpacity>
          <TouchableOpacity style={departListStyle.btnItem} onPress={browse}>
            <Text style={departListStyle.btnItemText}>Browse</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <DepartListItem navigation={navigation}  likedFligths={likedFligths} onLiked={onLiked} />
  </View>
  )

};
