import { combineReducers } from 'redux';

import field from './components/Page/reducer'
import { SELECT_FIELD } from './components/Page/actionTypes';
import { ADD_FIELD } from './components/Toolbar/actionTypes';

const selectedField = (state = null, action) => {
  switch (action.type) {
    case SELECT_FIELD:
      return action.payload
    case ADD_FIELD:
      return action.payload.fieldId
    default:
      return state
  }
}

export default combineReducers({
  field,
  selectedField
})

