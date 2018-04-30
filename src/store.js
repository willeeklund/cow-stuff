// @flow

// Types
export type ReduxAction = {
  type: string,
  payload: Object,
}

export type Item = {
  id: string,
  name: string,
  comment: string,
}

// Constants
const ADD_ITEM = 'ADD_ITEM'

const initialState = {
  items: [
    { id: '1', title: 'Tröja 1', comment: '' },
    { id: '2', title: 'Tröja 2', comment: '' },
    { id: '3', title: 'Byxor 1', comment: '' },
  ],
  isLoading: false,
}

// Reducer
export default (state: Object = initialState, action: ReduxAction): Object => {
  switch (action.type) {
    case ADD_ITEM: {
      return {
        ...state,
        items: [...state.items, action.payload.item],
      }
    }
    default: {
      return state
    }
  }
}

// Actions
export const addItem = (item: Item): ReduxAction => ({
  type: ADD_ITEM,
  payload: { item },
})
