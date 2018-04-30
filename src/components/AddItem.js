import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Item,
  Form,
  Input,
  Label,
  Left,
  Body,
  Right,
} from 'native-base'
import uuid from 'uuid'

export default class AddItemComponent extends React.Component {
  constructor() {
    super()
    this.state = { title: '', comment: '' }
  }

  render() {
    const { navigation } = this.props
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
          <Form>
            <Item floatingLabel>
              <Label>Plagg</Label>
              <Input
                autoFocus={false}
                value={this.state.title}
                onChangeText={val => this.setState({ title: val })}
              />
            </Item>
            <Item floatingLabel>
              <Label>Kommentar</Label>
              <Input
                value={this.state.comment}
                onChangeText={val => this.setState({ comment: val })}
              />
            </Item>
          </Form>
          <Button
            block
            onPress={() => {
              const { title, comment } = this.state
              const newItem = {
                id: uuid(),
                title,
                comment,
              }
              this.props.addItem(newItem)
              navigation.goBack()
            }}
          >
            <Text>Lägg till plagg</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBFAFA',
  },
})
