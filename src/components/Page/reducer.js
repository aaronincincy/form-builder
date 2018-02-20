import { MOVE_FIELD } from "./actionTypes";
import { ADD_FIELD } from "../Toolbar/actionTypes";

const field = (state = {}, action) => {
  switch (action.type) {
    case ADD_FIELD:
      return {
        ...state,
        [action.payload.fieldId]: action.payload
      }
    case MOVE_FIELD:
      return {
        ...state,
        [action.payload.fieldId]: {
          ...state[action.payload.fieldId],
          position: {
            top: state[action.payload.fieldId].position.top + action.payload.offsetTop,
            left: state[action.payload.fieldId].position.left + action.payload.offsetLeft,
          }
        }
      }
    default:
      return state
  }
}

export default field