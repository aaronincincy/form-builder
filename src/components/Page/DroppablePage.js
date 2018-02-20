import React from 'react'
import { connect } from 'react-redux'
import { DropTarget } from 'react-dnd'

import Page from './Page'
import FieldMarker from '../FieldMarker'
import { fieldsForPage } from './selectors'
import { moveField, selectField } from './actions'

const dropTargetEvents = {
  drop: (props, monitor, component) => {
    const { left: offsetLeft, top: offsetTop } = component.pageRef.getBoundingClientRect()
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

class DroppablePage extends React.Component {
  setPageRef = ref => {
    this.pageRef = ref
    this.props.connectDropTarget(ref)
  }

  handleSelectField = fieldId => e => {
    this.props.onSelectField(fieldId)
    e.stopPropagation()
  }

  handleUnselectField = e => {
    this.props.onSelectField(null)
  }

  render() {
    const { onMoveField, selectedField, fields, ...rest } = this.props
    return (
      <Page onMouseDown={this.handleUnselectField} innerRef={this.setPageRef} {...rest} >
        {fields.map((field) => (
          <FieldMarker selected={field.fieldId === selectedField} onMouseDown={this.handleSelectField(field.fieldId)} onMoveField={onMoveField} key={field.fieldId} {...field} />
        ))}
      </Page>
    );
  }
}

const connectToStore = connect((state, props) => ({
  fields: fieldsForPage(props.page.id)(state),
  selectedField: state.selectedField
}), { onMoveField: moveField, onSelectField: selectField })

const makeDroppable = DropTarget(['fieldTemplate', 'field'], dropTargetEvents, connect => ({ connectDropTarget: connect.dropTarget() }))

export default connectToStore(makeDroppable(DroppablePage));