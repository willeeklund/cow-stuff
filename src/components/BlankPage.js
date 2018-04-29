import * as React from 'react'
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
  Right,
  Body,
} from 'native-base'
import { path } from 'ramda'

const styles: any = StyleSheet.create({
  container: {
    backgroundColor: '#FBFAFA',
  },
})

class BlankPage extends React.Component {
  render() {
    const name = path(['navigation', 'state', 'params', 'name'], this.props)
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='ios-arrow-back' />
            </Button>
          </Left>

          <Body style={{ flex: 3 }}>
            <Title>{name ? name : 'Blank Page'}</Title>
          </Body>

          <Right />
        </Header>

        <Content padder>
          <Text>{name ? name : 'Create Something Awesome . . .'}</Text>
        </Content>
      </Container>
    )
  }
}

export default BlankPage
