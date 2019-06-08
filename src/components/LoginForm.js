import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import emailChanged from '../actions';
import { Card, CardSection, Input, Button } from './common';


class LoginForm extends Component {
  onEmailChange = (text) => {
    this.props.emailChanged(text);
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input label="Email" placeholder="email@example.com"
            onChangeText={this.onEmailChange}
          />
        </CardSection>

        <CardSection>
          <Input label="Password" secureTextEntry placeholder="password" />
        </CardSection>

        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    )
  }
}

export default connect(null, { emailChanged })(LoginForm);