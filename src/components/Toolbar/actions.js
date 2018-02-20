import { MOVE_TOOLBAR, ADD_FIELD } from "./actionTypes"
import createCounter from '../../util/createCounter'

const fieldCounter = createCounter();

export function moveToolbar(position) {
  return {
    type: MOVE_TOOLBAR,
    payload: position
  }
}

export function addField(payload) {
  return {
    type: ADD_FIELD,
    payload: {
      fieldId: `field_${fieldCounter()}`,
      ...payload
    }
  }
}