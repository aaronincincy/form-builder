import React from 'react'
import styled from 'styled-components'
import { DropTarget } from 'react-dnd';

const Workspace = styled.div`
  background: lightgray;
  padding: 20px;
  flex: 1 0 auto;
  box-sizing: border-box;
  position: relative;
  overflow: auto;
`

Workspace.displayName = "Workspace"

const DroppableWorkspace = ({ connectDropTarget, ...rest }) => (
  <Workspace innerRef={r => connectDropTarget(r)} {...rest} />
)

const toolbarTarget = {
  drop: (props, monitor, component) => {
    const { x: left, y: top } = monitor.getDifferenceFromInitialOffset()
    return {
      top,
      left
    }
  }
}

export default DropTarget('toolbar', toolbarTarget, (connect) => ({
  connectDropTarget: connect.dropTarget()
}))(DroppableWorkspace)