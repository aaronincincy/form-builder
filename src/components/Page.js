import React from 'react'
import styled from 'styled-components'
import { DropTarget } from 'react-dnd';

const pageTarget = {
  drop(props, monitor) {
    const { x: left, y: top } = monitor.getClientOffset()
    return {
      page: props.page,
      top,
      left
    }
  }
}

const Page = styled.div`
  background: white;
  box-shadow: 0 0 10px darkgray;
  margin: 0 auto;
  width: 700px;
  height: 700px;
`

const DroppablePage = ({ connectDropTarget, ...rest }) => connectDropTarget(
  <div>
    <Page {...rest} />
  </div>
)

export default DropTarget('fieldTemplate', pageTarget, connect => ({ connectDropTarget: connect.dropTarget() }))(DroppablePage);