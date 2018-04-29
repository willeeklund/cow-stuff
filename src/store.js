// @flow

// Types
export type ReduxAction = {
  type: string,
  payload: Object,
}

export type Item = {
  id: string,
  name: string,
}

// Constants
const ADD_ITEM = 'ADD_ITEM'

const initialState = {
  items: [
    { id: 'mhads', name: 'Tröja 1' },
    { id: 'ioas', name: 'Tröja 2' },
    { id: 'lkasjd', name: 'Byxor 1' },
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
