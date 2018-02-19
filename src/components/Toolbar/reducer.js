import { MOVE_TOOLBAR } from "./actionTypes";

const initialState = {
  top: 20,
  left: 20
}
const toolbar = (state = initialState, action) => {
  switch (action.type) {
    case MOVE_TOOLBAR:
      return {
        top: action.payload.top,
        left: action.payload.left
      }
    default:
      return state;
  }
}

export default toolbar