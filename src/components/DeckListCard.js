import React, { useState,useEffect } from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {CardItem, Text, Body, Content, Card,Icon} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

const DeckListCard = props => {
      const [fav,setFav]= useState(false)
      const [updated,setUpdated]= useState(false)

  const AddFav = async()  =>{
        const Item = (props.item.suit + props.item.value+props.item.code)
       const Get= await AsyncStorage.getItem('Favs');
       const result = JSON.parse(Get)||[] ;
       const data = [...result,Item]
       if (result.includes(Item) && fav) {
             const newData = result.filter(item=>item!==Item)
            await AsyncStorage.setItem('Favs',JSON.stringify(newData))
            setFav(false)
      }
       else if (result &&result.length<=4 && !result.includes(Item)) {
              await AsyncStorage.setItem('Favs',JSON.stringify(data))
              setFav(true)
        }
        
  }
  const GetFav = async () =>{

      const Item =  (props.item.suit + props.item.value+props.item.code)
      const Get= await AsyncStorage.getItem('Favs')
      const result = JSON.parse(Get);
       if ( result.includes(Item)) {
             setFav(true);
       }
  }
  useEffect(() => {
        GetFav().then(()=>console.log("h")) .catch((err) =>console.log(err))
        
  }, []);
  return (
    <View style={styles.mainContainer}>
      <Content>
        <Card style={styles.cardContainer}>
          <CardItem>
            <Body style={styles.cardBody}>
              <View style={styles.textView1}>
                <Text style={styles.cardText}>SUIT:</Text>
                <Text>{props.item.suit}</Text>
              </View>
              <View style={styles.textView2}>
                <Text style={styles.cardText}>Code:</Text>
                <Text>{props.item.code}</Text>
              </View>
              <TouchableOpacity onPress={async() => await AddFav()}>
              <Icon type="MaterialCommunityIcons" name= {fav? "heart":"heart-outline"} />
              </TouchableOpacity>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </View>
  );
};

export default DeckListCard;

const styles = StyleSheet.create({
  cardText: {
    fontSize: 20,
    color: 'blue',
    padding: 8,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#bfbfbf',
  },
  cardBody: {
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#e6ffff',
  },
  cardContainer: {
    marginLeft: 15,
    marginRight: 14,
  },
  textView1: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textView2: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
