import React from 'react'
import styled from 'styled-components'
import { DragSource } from 'react-dnd'

const ToolbarItem = styled.div`
  padding: 5px;
  cursor: pointer;
  user-select: none;
  font-family: sans-serif;
  font-size: 12px;
  font-weight: bold;

  &:hover {
    background: lightgray;
  }
`

const templateSource = {
  beginDrag(props) {
    return {
      template: props.fieldTemplate
    }
  },

  endDrag(props, monitor) {
    const item = monitor.getItem()
    const dropResult = monitor.getDropResult()

    if (dropResult) {
      props.onAddField(item, dropResult)
    }
  },
}

const DraggableToolbarItem = ({ connectDragSource, ...rest }) => connectDragSource(
  <div>
    <ToolbarItem {...rest} />
  </div>
)

export default DragSource("fieldTemplate", templateSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource()
}))(DraggableToolbarItem)