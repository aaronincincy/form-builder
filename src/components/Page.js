import React from 'react'
import styled from 'styled-components'
import { DropTarget } from 'react-dnd';

const pageTarget = {
  drop(props, monitor, component) {
    const { x: offsetLeft, y: offsetTop } = component.page.getBoundingClientRect()
    const { x: left, y: top } = monitor.getClientOffset()
    return {
      page: props.page,
      top: top - offsetTop,
      left: left - offsetLeft
    }
  }
}

const Page = styled.div`
  background: white;
  box-shadow: 0 0 10px darkgray;
  margin: 0 auto;
  width: 700px;
  height: 700px;
  position: relative;
  overflow: hidden;
`

class DroppablePage extends React.Component {
  render() {
    const { connectDropTarget, ...rest } = this.props
    return connectDropTarget(
      <div>
        <Page innerRef={r => this.page = r} {...rest} />
      </div>
    );
  }
}

export default DropTarget('fieldTemplate', pageTarget, connect => ({ connectDropTarget: connect.dropTarget() }))(DroppablePage);