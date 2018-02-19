import React from 'react'
import { DragSource } from 'react-dnd'
import FieldMarker from './FieldMarker'

const dragSourceEvents = {
  beginDrag: (props) => {
    return {
      fieldId: props.fieldId
    }
  },

  endDrag: (props, monitor) => {
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
    return (
      <FieldMarker innerRef={r => connectDragSource(r)} isDragging={isDragging} {...rest} />
    )
  }
}
export default DragSource('field', dragSourceEvents, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))(DraggableFieldMarker)