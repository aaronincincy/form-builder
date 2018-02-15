import { combineReducers } from 'redux';

const initialToolbarState = {
  top: 20,
  left: 20
}
const toolbar = (state = initialToolbarState, action) => {
  switch (action.type) {
    case 'MOVE_TOOLBAR':
      return {
        top: action.payload.top,
        left: action.payload.left
      }
    default:
      return state;
  }
}

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

