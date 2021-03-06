import React from 'react'
import styled, { css } from 'styled-components'
import LeftIcon from 'react-icons/lib/fa/caret-left'
import RightIcon from 'react-icons/lib/fa/caret-right'
import SidebarDrawer from './SidebarDrawer'
import { hoverHighlight } from '../style';

const LeftArrow = styled(LeftIcon) ``
const RightArrow = styled(RightIcon) ``

const DrawerContainer = styled.div`
  width: 0;
  overflow-x: hidden;
  overflow-y: auto;
  transition: width 100ms;
  flex: 0 1 auto;

  ${props => props.open && css`
    width: 300px;
  `}
`

const Sidebar = styled.div`
  position: absolute;
  top:0;
  bottom: 0;
  background: #333;
  display: flex;
  align-items: stretch;
  z-index: 10001;
  
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
  background: black;
  font-size: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  
  ${hoverHighlight}

  ${props => props.right && css`
    order: 2;
    border-left: 1px solid #b4b4b4;
  `}

  ${props => !props.right && css`
    border-right: 1px solid #b4b4b4;
  `}

`

class ExpandableSidebar extends React.Component {
  state = {
    pinned: true,
    open: true
  }

  handleMouseEnter = () => {
    this.setState({
      open: true
    })

    window.clearTimeout(this.timeout)
  }

  handleMouseLeave = () => {
    console.log('out')
    this.timeout = window.setTimeout(() => {
      this.setState(state => ({
        open: state.pinned
      }))
    }, 600)
  }

  togglePinned = () => {
    this.setState(state => {
      return {
        pinned: !state.pinned,
        open: !state.pinned
      }
    })
  }


  render() {
    return (
      <Sidebar {...this.props} onMouseLeave={this.handleMouseLeave} onMouseEnter={this.handleMouseEnter} >
        <Toggle right={this.props.right} onClick={this.togglePinned}>
          {this.props.right && (this.state.pinned ? <RightArrow /> : <LeftArrow />)}
          {!this.props.right && (this.state.pinned ? <LeftArrow /> : <RightArrow />)}
        </Toggle>
        <DrawerContainer open={this.state.open}>
          {this.props.children}
        </DrawerContainer>
      </ Sidebar>
    )
  }
}

ExpandableSidebar.Drawer = SidebarDrawer

export default ExpandableSidebar