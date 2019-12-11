import React, {Component} from "react";
import { Divider, Form, Label } from 'semantic-ui-react';
import { Card } from 'semantic-ui-react';
import { Button} from 'semantic-ui-react';

export default class form extends Component {
    render() {
      return (
        <Card>
          <Card.Content>
      <Card.Header>Sign Up Form</Card.Header>
      <Card.Description> 
      <Form>
      <Form.Field>
        <Label>First Name</Label>
        <input type='text' placeholder='First Name' />
      </Form.Field>
      <Divider />
  
      <Form.Field>
        <Label>Last Name</Label>
        <input type='text' placeholder='Last Name' />
      </Form.Field>
      <Divider />
  
      <Form.Field>
        <Label>Email</Label>
        <input type='text' placeholder='Email' />
      </Form.Field>
      <Divider />
  
      <Form.Field>
        <Label>Password</Label>
        <input type='text' placeholder='Password' />
      </Form.Field>
      <Divider />

      <Form.Field>
        <Label>Phone Number</Label>
        <input type='text' placeholder='Phone Number' />
      </Form.Field>
      <Divider />
      <Button>Sign Up</Button>
    </Form>
    </Card.Description>
    </Card.Content>
    </Card>
      );
    }
  }
  

 