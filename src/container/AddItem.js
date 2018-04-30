// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../store'
import AddItemComponent from '../components/AddItem'
export interface Props {
  navigation: any;
}
export interface State {}
class AddItemContainer extends React.Component<Props, State> {
  render() {
    return <AddItemComponent {...this.props} />
  }
}

const mapStateToProps = state => ({
  // data: state.homeReducer.list,
  isLoading: state.cowStuff.isLoading,
  items: state.cowStuff.items,
})

const mapDispatchToProps = dispatch => ({
  // fetchList: url => dispatch(fetchList(url)),
  addItem: item => dispatch(addItem(item)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddItemContainer)
