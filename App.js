import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './src/navigation/HomeStack';
import AsyncStorage from '@react-native-community/async-storage';




export default function App() {
  useEffect(() =>{
        AsyncStorage.clear() .then(() =>{console.log('Clear');}) .catch((err) => {console.log(err);})
  },[])
  return (
    <NavigationContainer >
      <Provider store={store}>
        <HomeStack/>
      </Provider>
    
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
