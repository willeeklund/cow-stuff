import React from 'react'
import { StyleSheet } from 'react-native'
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base'

export default props => {
  const { navigation } = props
  return (
    <Container style={styles.container}>
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name='ios-arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title>Lägg till</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <Text>TODO: Ska kunna lägga till en grej här</Text>
      </Content>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBFAFA',
  },
})
