import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Picker, Icon, Button, Text } from 'native-base';
import { AsyncStorage } from 'react-native';


import api from '../api/api';
import { navigate } from '../navigationRef';



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

async doSignUp(email, password, occupation){
    try{
        const response = await api.post('/signup', { email,password, occupation });
        await AsyncStorage.setItem('token', response.data.token);
    
        this.props.navigation.navigate("Home")        }
        catch(err){
            console.log("yoooo"+err);
        }

}

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input 
                value={this.state.email}
                onChangeText={(value) => this.setState({email: value })}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input 
              secureTextEntry
              value={this.state.password}
              onChangeText={(value) => this.setState({password: value })}/>
            </Item>
        <Item>
            <Text>Occupation</Text>

            <Picker
              mode="dropdown"
              iosHeader="Select your SIM"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              
              <Picker.Item label="Doctor/RN" value="0" />
              <Picker.Item label="Mail/Delivery" value="1" />
              <Picker.Item label="Essential Worker" value="2" />
              <Picker.Item label="Other" value="3" />
            </Picker>
            </Item>
            <Button primary onPress={() => this.doSignUp(this.state.email, this.state.password, this.state.selected)}><Text> Sign Up </Text></Button>
          </Form>
        </Content>
      </Container>
    );
  }
}