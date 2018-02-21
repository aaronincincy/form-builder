import React from 'react'
import styled from 'styled-components'
import { compose, withHandlers, withState } from 'recompose';
import { hoverHightlight } from '../../styles';
import OpenIcon from 'react-icons/lib/fa/angle-down'
import ClosedIcon from 'react-icons/lib/fa/angle-right'


const Title = styled.div`
  cursor: pointer;
  font-size:18px;
  margin-bottom:8px;
  user-select: none;
  ${hoverHightlight}
`


const SubPanelContents = styled.div`
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

class SubPanel extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <Title onClick={this.props.toggle}>{this.props.expanded ? <OpenIcon /> : <ClosedIcon />} {this.props.title}</Title>
        {this.props.expanded && <SubPanelContents>{this.props.children}</SubPanelContents>}
      </div>
    )
  }
}

const StyledSubPanel = styled(SubPanel) `
  margin: 8px;
`

export default toggleable('expanded')(StyledSubPanel)