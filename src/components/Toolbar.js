import React from 'react'
import styled from 'styled-components'
import ToolbarItem from './ToolbarItem';
import { DragSource } from 'react-dnd';

const ToolbarHandle = styled.div`
  background: darkgray;
  height: 10px;
  border: 2px outset darkgray;
  box-sizing: border-box;
`

const template1 = {
  width: 100,
  height: 30,
  type: 'text'
}

const template2 = {
  width: 30,
  height: 30,
  type: 'checkbox'
}

class Toolbar extends React.Component {
  render() {
    const { connectDragSource, connectDragPreview, isDragging } = this.props
    return connectDragPreview(
      <div className={this.props.className} style={{ visibility: isDragging ? 'hidden' : 'visible' }}>
        {connectDragSource(<div><ToolbarHandle /></div>)}
        <ToolbarItem onAddField={this.props.onAddField} fieldTemplate={template1}>Text</ToolbarItem>
        <ToolbarItem onAddField={this.props.onAddField} fieldTemplate={template2}>Checkbox</ToolbarItem>
      </div>
    )
  }
}

const StyledToolbar = styled(Toolbar) `
  background: silver;
  border: 1px solid black;
  box-shadow: 3px 3px 5px darkgray;
  position: absolute;
  top: ${props => props.top || 20}px;
  left: ${props => props.left || 20}px;
  width: 150px;
`
StyledToolbar.displayName = 'StyledToolbar'

const toolbarDragSource = {
  beginDrag: (props, monitor) => {
    return {}
  },
  endDrag: (props, monitor) => {
    const dropResult = monitor.getDropResult()
    props.onMove({ top: dropResult.top + props.top, left: dropResult.left + props.left })
  }
}
export default DragSource("toolbar", toolbarDragSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging(),
}))(StyledToolbar)