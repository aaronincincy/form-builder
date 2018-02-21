import React from 'react'

import Sidebar from './components/Sidebar'
import FieldTemplate from '../Toolbar'

const textBox = {
  width: 100,
  height: 24,
  type: 'text'
}

const checkbox = {
  width: 20,
  height: 20,
  type: 'checkbox'
}

const boundField = to => {
  return {
    width: 100,
    height: 25,
    type: 'text',
    boundto: to
  }
}

const LeftSidebar = props => (
  <Sidebar>
    <Sidebar.Drawer title="Quick Fields" defaultExpanded>
      <FieldTemplate template={boundField('firstName')}>First Name</FieldTemplate>
      <FieldTemplate template={boundField('lastName')}>Last Name</FieldTemplate>
      <FieldTemplate template={boundField('emailAddress')}>Email Address</FieldTemplate>
      <FieldTemplate template={boundField('homePhone')}>Home Phone</FieldTemplate>
    </Sidebar.Drawer>
    <Sidebar.Drawer title="Basic Fields">
      <FieldTemplate template={textBox}>Text Box</FieldTemplate>
      <FieldTemplate template={checkbox}>Checkbox</FieldTemplate>
    </Sidebar.Drawer>
  </Sidebar>
)

export default LeftSidebar