import React from 'react'
import { compose, branch, renderNothing } from 'recompose'
import { connect } from 'react-redux'

import Sidebar from './components/Sidebar'
import styled from 'styled-components';

const Label = styled.label`
  display: block;
`

const RightSidebar = props => (
  <Sidebar right>
    <Sidebar.Drawer title="Field Settings" defaultExpanded>
      <Label>
        Name
        <input type="text" />
      </Label>
      <Label>
        <input type="checkbox" />
        Required
      </Label>
      <Label>
        <input type="checkbox" />
        Read Only
      </Label>
    </Sidebar.Drawer>
    <Sidebar.Drawer title="Advanced">
      Stuff
    </Sidebar.Drawer>
  </Sidebar>
)

const enhance = compose(
  connect(state => ({
    selectedField: state.selectedField
  }), null),
  branch(props => props.selectedField === null, renderNothing)
)

export default enhance(RightSidebar)