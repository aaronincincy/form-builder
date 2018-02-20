import { MOVE_FIELD, SELECT_FIELD } from './actionTypes'

export function moveField(fieldId, position) {
  return {
    type: MOVE_FIELD,
    payload: {
      fieldId,
      ...position
    }
  }
}

export function selectField(fieldId) {
  return {
    type: SELECT_FIELD,
    payload: fieldId
  }
}