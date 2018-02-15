import React from 'react'
import styled from 'styled-components'
import { DropTarget } from 'react-dnd';

const pageTarget = {
  drop(props, monitor, component) {
    const { x: offsetLeft, y: offsetTop } = component.pageRef.getBoundingClientRect()
    const { x: left, y: top } = monitor.getClientOffset()
    const { x: differenceLeft, y: differenceTop } = monitor.getDifferenceFromInitialOffset()
    return {
      page: props.page,
      position: {
        top: top - offsetTop,
        left: left - offsetLeft
      },
      offset: {
        top: differenceTop,
        left: differenceLeft
      }
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

Page.displayName = 'Page'

class DroppablePage extends React.Component {
  render() {
    const { connectDropTarget, ...rest } = this.props
    return (
      <Page innerRef={r => {
        this.pageRef = r
        connectDropTarget(r)
      }} {...rest} />
    );
  }
}

export default DropTarget(['fieldTemplate', 'field'], pageTarget, connect => ({ connectDropTarget: connect.dropTarget() }))(DroppablePage);