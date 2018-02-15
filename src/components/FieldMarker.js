import React from 'react'
import styled, { css } from 'styled-components'
import { DragSource } from 'react-dnd';

const FieldMarker = styled.div`
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background: lightblue;
  opacity: .5;

  ${props => props.selected && css`
    outline: 1px solid darkblue;
  `}
`
const fieldSource = {
  beginDrag(props) {
    return {
      fieldId: props.fieldId
    }
  },

  endDrag(props, monitor) {
    const { fieldId } = monitor.getItem()
    const dropResult = monitor.getDropResult()

    if (dropResult) {
      props.onMoveField(fieldId, dropResult)
    }
  },
}

class DraggableFieldMarker extends React.Component {
  render() {
    const { connectDragSource, isDragging, ...rest } = this.props
    if (isDragging) return null
    return (
      <FieldMarker innerRef={r => connectDragSource(r)} isDragging={isDragging} {...rest} />
    )
  }
}
export default DragSource('field', fieldSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))(DraggableFieldMarker)