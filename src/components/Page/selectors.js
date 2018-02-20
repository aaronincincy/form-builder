export const fieldsForPage = page => state => {
  return Object.keys(state.field)
    .map(id => state.field[id])
    .map(field => ({
      fieldId: field.fieldId,
      ...field.position,
      ...field.size
    }))
}
