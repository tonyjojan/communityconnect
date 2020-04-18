import React, { Component } from 'react';


import api from '../api/api';
import { navigate } from '../navigationRef';

import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import { Text } from 'react-native';
import { Image, TouchableHighlight } from 'react-native';
import { sanFranciscoWeights } from 'react-native-typography'


export default class Items extends Component {

    constructor(props) {
        super(props);
        this.state = {
          items:[]
        };
      }
      onValueChange = (value) =>  {
        this.setState({
          selected: value
        });



      }

      async componentDidMount() {
        const response = await api.get('/items');
        this.setState({items:response.data})
      }

  render() {
    let cards = this.state.items.map((item) => (
        <TouchableHighlight
  activeOpacity={0.6}
  underlayColor="#ffffff"
  onPress={() => {
    this.props.navigation.navigate("Details",{ item: item})
  }}>
        <Card>
            <CardItem>
                <Body>
                  <Text>{item.name}</Text>
                  <Text note>{item.location}</Text>
                  <Text note>{item.notes}</Text>

                </Body>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: item.image}} style={{height: 400, width: 400, flex: 1}}/>
            </CardItem>
            
          </Card>
          </TouchableHighlight>
    ))
    return (
      <Container>
        <Content>
        {cards}
        </Content>
      </Container>
    );
  }
}