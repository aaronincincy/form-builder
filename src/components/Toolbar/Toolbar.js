import React from 'react'
import styled from 'styled-components'
import ToolbarItem from './ToolbarItem'

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
    const { toolbarRef, handleRef } = this.props
    return (
      <div ref={toolbarRef} className={this.props.className}>
        <ToolbarHandle innerRef={handleRef} />
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
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  width: 150px;
  visibility: ${props => props.isDragging ? 'hidden' : 'visible'};
`
StyledToolbar.displayName = 'StyledToolbar'

export default StyledToolbar