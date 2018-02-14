import React from 'react'
import styled from 'styled-components'
import { DropTarget } from 'react-dnd';

const Workspace = styled.div`
  background: lightgray;
  padding: 20px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`

const DroppableWorkspace = ({ connectDropTarget, ...rest }) => connectDropTarget(
  <div style={{ height: '100%' }}>
    <Workspace {...rest} />
  </div>
)

const toolbarTarget = {
  drop(props, monitor, component) {
    const { x: left, y: top } = monitor.getDifferenceFromInitialOffset()
    console.log(top, left)
    return {
      top,
      left
    }
  }
}

export default DropTarget('toolbar', toolbarTarget, (connect) => ({
  connectDropTarget: connect.dropTarget()
}))(DroppableWorkspace)