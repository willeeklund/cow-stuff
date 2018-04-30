import React from 'react'
import {
  Container,
  Content,
  Header,
  Body,
  Title,
  Button,
  Text,
  View,
  Icon,
} from 'native-base'

class Login extends React.Component {
  render() {
    return (
      <Container>
        <Header style={{ height: 200 }}>
          <Body style={{ alignItems: 'center' }}>
            <Icon name='flash' style={{ fontSize: 60 }} />
            <Title>ReactNativeSeed.com</Title>
            <View padder>
              <Text style={{ color: '#000' }}>Build Something Amazing</Text>
            </View>
          </Body>
        </Header>
        <Content>
          {this.props.loginForm}
          <View padder>
            <Button block onPress={() => this.props.onLogin()}>
              <Text>Login</Text>
            </Button>
          </View>
        </Content>
      </Container>
    )
  }
}

export default Login
