import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';
import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

const DeckDetails = props => {
  return (
    <Container style={styles.main}>
      <Content>
        <Card style={styles.topcard}>
          <CardItem style={styles.imageStyle}>
            <Image
              source={{
                uri: props.route.params.item.image,
              }}
              style={styles.imageStyle}
            />
          </CardItem>
          <CardItem style={styles.topcard}>
            <Left>
              <Text>Suit :</Text>
              <Text>{props.route.params.item.suit}</Text>
            </Left>
            <Body>
              <Button transparent>
                <Text>Code :</Text>
                <Text>{props.route.params.item.code}</Text>
              </Button>
            </Body>
            <Right style={styles.right}>
              <Text>Value :</Text>
              <Text>{props.route.params.item.value}</Text>
            </Right>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

export default DeckDetails;

const styles = StyleSheet.create({
  imageStyle: {
    height: 280,
    width: 200,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    marginTop: 20,
    backgroundColor: '#e6e6e6',
  },
  topcard: {
    backgroundColor: '#ffe6ff',
  },
  right: {
    display: 'flex',
    flexDirection: 'row',
  },
});
