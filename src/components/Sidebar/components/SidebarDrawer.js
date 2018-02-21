import React from 'react'
import styled from 'styled-components'
import { compose, withHandlers, withState } from 'recompose';
import { hoverHighlight } from '../style';
import OpenIcon from 'react-icons/lib/fa/angle-down'
import ClosedIcon from 'react-icons/lib/fa/angle-right'


const Title = styled.div`
  cursor: pointer;
  font-size:18px;
  margin-bottom:8px;
  user-select: none;
  ${hoverHighlight}
`


const DrawerContents = styled.div`
  background: #4f4f4f;
  border: 1px inset gray;
`
function titleCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const toggleable = (propName) => compose(
  withState(propName, 'setToggle', props => props[`default${titleCase(propName)}`]),
  withHandlers({
    toggle: props => event => {
      event.preventDefault()
      props.setToggle(!props[propName])
    },
  })
)

class SidebarDrawer extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <Title onClick={this.props.toggle}>{this.props.expanded ? <OpenIcon /> : <ClosedIcon />} {this.props.title}</Title>
        {this.props.expanded && <DrawerContents>{this.props.children}</DrawerContents>}
      </div>
    )
  }
}

const StyledDrawer = styled(SidebarDrawer) `
  margin: 8px;
`

export default toggleable('expanded')(StyledDrawer)