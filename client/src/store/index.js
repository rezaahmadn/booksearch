import { legacy_createStore as createStore } from 'redux'

const initialState = {
  favorites: []
}


function favoriteReducer(state = initialState, action) {
  switch (action.type) {
    case 'setFavorites':
      return action.payload
    default:
      return state
  }
}

let store = createStore(favoriteReducer)

export default store