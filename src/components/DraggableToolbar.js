import React from 'react'
import { DragSource } from 'react-dnd'
import { connect } from 'react-redux'

import Toolbar from './Toolbar'

class DraggableToolbar extends React.Component {
  render() {
    const { connectDragSource, connectDragPreview, ...rest } = this.props
    return (
      <Toolbar
        toolbarRef={r => connectDragPreview(r)}
        handleRef={r => connectDragSource(r)}
        {...rest}
      />
    )
  }
}

const dragSource = {
  beginDrag: (props, monitor) => {
    return {}
  },
  endDrag: (props, monitor) => {
    const dropResult = monitor.getDropResult()
    props.onMove({ top: dropResult.top + props.top, left: dropResult.left + props.left })
  }
}

const makeDraggable = DragSource("toolbar", dragSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging(),
}))

const moveToolbar = position => {
  return {
    type: 'MOVE_TOOLBAR',
    payload: position
  }
}

const connectToStore = connect(state => ({
  top: state.toolbar.top,
  left: state.toolbar.left
}), { onMove: moveToolbar })

export default connectToStore(makeDraggable(DraggableToolbar))