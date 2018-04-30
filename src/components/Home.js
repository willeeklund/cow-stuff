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
  List,
  ListItem,
} from 'native-base'

export default props => {
  const { navigation, items } = props
  return (
    <Container style={styles.container}>
      <Header>
        <Left>
          <Button transparent>
            <Icon
              active
              name='menu'
              onPress={() => navigation.navigate('DrawerOpen')}
            />
          </Button>
        </Left>
        <Body>
          <Title>Home</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon
              active
              name='ios-add'
              onPress={() => navigation.navigate('AddItem')}
            />
          </Button>
        </Right>
      </Header>
      <Content>
        <List>
          {items.map((item, i) => (
            <ListItem
              key={item.id}
              onPress={() => navigation.navigate('BlankPage', item)}
            >
              <Text>{item.title}</Text>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBFAFA',
  },
})
