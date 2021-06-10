import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DeckList from '../screens/DeckList';
import NewDeck from '../screens/NewDeck'
import DeckDetails from '../screens/DeckDetails';
const Stack = createStackNavigator();

 
   
export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="newdecklist">
      <Stack.Screen name="Start Game" component={NewDeck} />
      <Stack.Screen name="Deck List" component={DeckList} />
      <Stack.Screen name="Deck Details" component={DeckDetails} />
    </Stack.Navigator>
  );
}
