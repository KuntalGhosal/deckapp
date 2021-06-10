import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {newDeckList} from '../actions/UserActions';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
export default function NewDeck() {
  const store = useSelector(state => state);
  const dispatch = useDispatch();
  const Count = 1;
  useEffect(() => {
    dispatch(newDeckList(Count));
  }, []);
  console.log('Store', store);
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <View>
        <Image
          source={{
            uri: 'https://deckofcardsapi.com/static/img/JS.png',
          }}
          style={styles.imageStyle}
          resizeMode="stretch"
          resizeMethod="resize"
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Deck List', {});
        }}
        style={styles.start}>
        <Text style={styles.textStyle}>Start</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    height: '80%',
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  main: {
    backgroundColor: '#e6e6ff',
  },
  start: {
    width: 300,
    height: 60,
    backgroundColor: '#9999ff',
    alignSelf: 'center',
    borderRadius: 8,
  },
  textStyle: {
    fontSize: 30,
    textAlign: 'center',
  },
});
