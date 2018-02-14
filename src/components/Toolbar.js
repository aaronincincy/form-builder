import React from 'react'
import styled from 'styled-components'
import ToolbarItem from './ToolbarItem';

const ToolbarHandle = styled.div`
  background: darkgray;
  height: 10px;
  border: 2px outset darkgray;
  box-sizing: border-box;
  cursor: move;
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
    return (
      <div className={this.props.className}>
        <ToolbarHandle />
        <ToolbarItem onAddField={this.props.onAddField} fieldTemplate={template1}>Some Field</ToolbarItem>
        <ToolbarItem onAddField={this.props.onAddField} fieldTemplate={template2}>Another Field</ToolbarItem>
      </div>
    )
  }
}

const StyledToolbar = styled(Toolbar) `
  background: silver;
  border: 1px solid black;
  box-shadow: 3px 3px 5px darkgray;
  position: absolute;
  top: 20px;
  left: 20px;
  width: 150px;
`

export default StyledToolbar;