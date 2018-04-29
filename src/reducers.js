import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import cowStuff from './store'
// import homeReducer from './container/HomeContainer/reducer'

export default combineReducers({
  cowStuff,
  form: formReducer,
  // homeReducer,
})
