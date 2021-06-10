import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React,{useState,useEffect} from 'react';
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import {useDispatch,useSelector} from 'react-redux'
import { getDeckList } from '../actions/UserActions';
import DeckListCard from '../components/DeckListCard';
import Loader from '../components/Loder'
const DeckList = () => {
      const store = useSelector((state) => state);
      const dispatch = useDispatch();
      const navigation = useNavigation();
      const [count,setCount]=useState(5);
      const Decklist =store.user.deckList.cards
     
      const onchange = (value) =>{
         setCount(value)
      }
      useEffect(() => {
            dispatch(getDeckList(count,{deck_id:store.user.newDeckList.deck_id}));
        }, []);
      
      useEffect(() => {
            dispatch(getDeckList(count,{deck_id:store.user.newDeckList.deck_id}));
        }, [count]);
        
      return (
            <ScrollView>
                      <TextInput
        style={styles.input}
        onChangeText={onchange}
        value={count}
        placeholder="Set Count"
        keyboardType="numeric"
      />
                  { Decklist ?Decklist.map((item)=> {
                        return (
                        <TouchableOpacity onPress={()=>navigation.navigate("Deck Details",{item:item})}>
                        <DeckListCard  item={item}/>
                        </TouchableOpacity>
                        )
                  }):<Loader />}
            </ScrollView>
      )
}

export default DeckList

const styles = StyleSheet.create({})
