import React, {useState} from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigate from './navigate';


const fonts = () => Font.loadAsync({
  'abel': require('./assets/fonts/Abel-Regular.ttf'),
  'rw-light': require('./assets/fonts/Raleway-ExtraLight.ttf'),
})


export default function App() {
  const [font, setFont] = useState(false);

  if(font){
      return ( 
          <Navigate/> 
    );
  } else {
    return (
      <AppLoading startAsync={fonts} 
                  onFinish={() => setFont(true)}
                  onError={console.warn}
                  />
    )
  }

};
