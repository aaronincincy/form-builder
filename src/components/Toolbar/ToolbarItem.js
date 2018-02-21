import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { DragSource } from 'react-dnd'

import { addField } from './actions'

const ToolbarItem = styled.div`
  padding: 5px;
  cursor: pointer;
  user-select: none;
  font-size: 16px;

  &:hover {
    background: lightgray;
  }
`

const templateSource = {
  beginDrag: (props) => {
    return {
      template: props.fieldTemplate
    }
  },

  endDrag: (props, monitor) => {
    const item = monitor.getItem()
    const dropResult = monitor.getDropResult()

    if (dropResult) {
      props.onAddField({
        template: item.template.type,
        position: {
          top: dropResult.position.top - item.template.height / 2,
          left: dropResult.position.left - item.template.width / 2,
        },
        size: {
          width: item.template.width,
          height: item.template.height
        }
      })
    }
  },
}

const DraggableToolbarItem = ({ connectDragSource, ...rest }) => (
  <ToolbarItem innerRef={r => connectDragSource(r)} {...rest} />
)

const makeDraggable = DragSource("fieldTemplate", templateSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource()
}))

const connectToStore = connect(null, { onAddField: addField })

export default connectToStore(makeDraggable(DraggableToolbarItem))