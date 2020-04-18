import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Picker, Icon, Button, Text } from 'native-base';


import api from '../api/api';
import { navigate } from '../navigationRef';

import { human } from 'react-native-typography'


export default class SignUp extends Component {

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
    return (
      <Container>
        <Content>
        <Text style={human.largeTitle}>Welcome to CommunityConnect!</Text>
        <Button full  large>
            <Text>View Your Items</Text>
          </Button>
          <Button full large success
          onPress={() => {this.props.navigation.navigate("Items") }}>

            <Text>Look for Donations</Text>
          </Button>
          <Button  full large dark
          onPress={() => {this.props.navigation.navigate("NewDonation") }}>

            <Text>Donate an Item</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}