// @flow
import React from 'react'
import Sidebar from '../components/Sidebar'
export interface Props {
  navigation: any;
}
export default class SidebarContainer extends React.Component<Props> {
  render() {
    return <Sidebar {...this.props} />
  }
}
