import React from 'react'
import styled, { css } from 'styled-components'
import LeftIcon from 'react-icons/lib/fa/caret-left'
import RightIcon from 'react-icons/lib/fa/caret-right'


const LeftArrow = styled(LeftIcon) ``
const RightArrow = styled(RightIcon) ``

const PanelContainer = styled.div`
  width: 0;
  overflow-x: hidden;
  overflow-y: auto;
  transition: width 100ms;

  ${props => props.open && css`
    width: 300px;
  `}
`

const Sidebar = styled.div`
  position: absolute;
  top:0;
  bottom: 0;
  background: #333;
  ${props => props.right ?
    css`
      right: 0;
    `
    :
    css`
      left: 0;
    `
  }
`

const Toggle = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  background: black;
  color: silver;
  font-size: 20px;
  text-align: center;
  display: flex;
  align-items: center;

  ${props => props.right ?
    css`
      right: 0;
    `
    :
    css`
      left: 0;
    `
  }

  &:hover ${LeftArrow}, &:hover ${RightArrow} {
    transition: color 100ms;
    color:white;
  }
`

const Panel = styled.div`
  width: 300px;
  background: darkred;
  min-height:100px;
`

class ExpandableSidebar extends React.Component {
  state = {
    pinned: false,
    open: false
  }

  handleMouseOver = () => {
    this.setState({
      open: true
    })
  }

  handleMouseOut = () => {
    this.setState(state => ({
      open: state.pinned
    }))
  }

  togglePinned = () => {
    this.setState(state => {
      return {
        pinned: !state.pinned
      }
    })
  }


  render() {
    return (
      <Sidebar {...this.props} onMouseOut={this.handleMouseOut} onMouseOver={this.handleMouseOver} >
        <Toggle right={this.props.right} onClick={this.togglePinned}>
          {this.props.right && (this.state.pinned ? <RightArrow /> : <LeftArrow />)}
          {!this.props.right && (this.state.pinned ? <LeftArrow /> : <RightArrow />)}
        </Toggle>
        <PanelContainer open={this.state.open}>
          {this.props.children}
        </PanelContainer>
      </ Sidebar>
    )
  }
}

ExpandableSidebar.Panel = Panel

export default ExpandableSidebar