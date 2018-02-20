import React from 'react'
import styled from 'styled-components'

const ToolbarHandle = styled.div`
  background: darkgray;
  height: 10px;
  border: 2px outset darkgray;
  box-sizing: border-box;
`

class Toolbar extends React.Component {
  render() {
    const { toolbarRef, handleRef, children } = this.props
    return (
      <div ref={toolbarRef} className={this.props.className}>
        <ToolbarHandle innerRef={handleRef} />
        {children}
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