import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Picker, Icon, Button, Text } from 'native-base';


import api from '../api/api';
import { navigate } from '../navigationRef';



export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
          selected: '0',
          name:'',
          location:'',
          notes:'',
          for:'0',
        };
      }
      onValueChange = (value) =>  {
        this.setState({
          selected: value
        });
      }
      async doSubmit(name,location,notes,selected){
        try{
            const response = await api.post('/items', { name,location,notes,selected });
        
            this.props.navigation.navigate("Confirmation",{ item: response.data}) }
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
              <Label>Name</Label>
              <Input 
                value={this.state.name}
                onChangeText={(value) => this.setState({name: value })}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Location</Label>
              <Input 
              value={this.state.location}
              onChangeText={(value) => this.setState({location: value })}/>
            </Item>
            <Item floatingLabel last>
              <Label>Notes</Label>
              <Input 
              value={this.state.notes}
              onChangeText={(value) => this.setState({notes: value })}/>
            </Item>
        <Item>
            <Text>Item</Text>

            <Picker
              mode="dropdown"
              iosHeader="Item:"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={(value) => {this.setState({selected:value})}}
            >
              
              <Picker.Item label="Mask" value="0" />
              <Picker.Item label="Toilet Paper" value="1" />
              <Picker.Item label="Hand Sanitizer" value="2" />
              <Picker.Item label="Scrubs/Gloves" value="3" />
              <Picker.Item label="Other" value="4" />
            </Picker>
            </Item>
            <Item>
                <Text>For:</Text>
            <Picker
              mode="dropdown"
              iosHeader="For:"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              selectedValue={this.state.for}
              onValueChange={(value) => {this.setState({for:value})}}
            >
              
              <Picker.Item label="Doctor/RN" value="0" />
              <Picker.Item label="Mail/Delivery" value="1" />
              <Picker.Item label="Essential Worker" value="2" />
              <Picker.Item label="Other" value="3" />
            </Picker>
            </Item>
            <Button primary onPress={() => this.doSubmit(this.state.name, this.state.location, this.state.notes, this.state.selected)}><Text> Submit </Text></Button>
          </Form>
        </Content>
      </Container>
    );
  }
}