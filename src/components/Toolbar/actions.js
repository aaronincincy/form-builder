import { MOVE_TOOLBAR } from "./actionTypes";

export function moveToolbar(position) {
  return {
    type: MOVE_TOOLBAR,
    payload: position
  }
}