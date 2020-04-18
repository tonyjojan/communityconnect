import React, { Component } from 'react';

import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import { Text } from 'react-native';
import { Image } from 'react-native';

import api from '../api/api';
import { navigate } from '../navigationRef';
import { BaseRouter } from '@react-navigation/native';

import { sanFranciscoWeights } from 'react-native-typography'


export default class Confirmation extends Component {

    constructor(props) {
        super(props);
        this.state = {
          selected: "key1",
          email:'',
          password:''
        };
      }
      onValueChange = (value) =>  {
        this.setState({
          selected: value
        });
      }


  render() {
    console.log(this.props.route.params.item.name)
    return (
      <Container>
        <Content>
        <Text style={sanFranciscoWeights.black}>Thank you!</Text>
        <Text style={sanFranciscoWeights.regular}>Details of your donation:</Text>

    <Card>
            <CardItem>
                <Body>
                  <Text>{this.props.route.params.item.name}</Text>
                  <Text note>{this.props.route.params.item.location}</Text>
                  <Text note>{this.props.route.params.item.notes}</Text>

                </Body>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: this.props.route.params.item.image}} style={{height: 400, width: 400, flex: 1}}/>
            </CardItem>
            
          </Card>
          <Button iconLeft block primary
          onPress={() => {this.props.navigation.navigate("Home") }}>
          <Text>Back to Home</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}