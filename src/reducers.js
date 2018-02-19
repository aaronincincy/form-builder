import { combineReducers } from 'redux';

import toolbar from './components/Toolbar/reducer'


const field = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_FIELD':
      return {
        ...state,
        [action.payload.fieldId]: action.payload
      }
    case 'MOVE_FIELD':
      return {
        ...state,
        [action.payload.fieldId]: {
          ...state[action.payload.fieldId],
          top: action.payload.top,
          left: action.payload.left
        }
      }
    default:
      return state
  }
}

export default combineReducers({
  toolbar,
  field
})

