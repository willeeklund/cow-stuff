// @flow
import * as React from 'react'
import AddItemComponent from '../components/AddItem'
export interface Props {
  navigation: any;
}
export interface State {}
export default class AddItemContainer extends React.Component<Props, State> {
  render() {
    return <AddItemComponent {...this.props} />
  }
}
