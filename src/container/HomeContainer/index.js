// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Home from '../../components/Home'
// import datas from './data'
// import { fetchList } from './actions'
export interface Props {
  navigation: any;
  // fetchList: Function;
  // data: Object;
  items: any;
}
export interface State {}
class HomeContainer extends Component<Props, State> {
  componentDidMount() {
    // this.props.fetchList(datas)
  }
  render() {
    return (
      <Home
        navigation={this.props.navigation}
        // list={this.props.data}
        items={this.props.items}
      />
    )
  }
}

const mapStateToProps = state => ({
  // data: state.homeReducer.list,
  isLoading: state.cowStuff.isLoading,
  items: state.cowStuff.items,
})

function mapDispatchToProps(dispatch) {
  return {
    // fetchList: url => dispatch(fetchList(url)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
