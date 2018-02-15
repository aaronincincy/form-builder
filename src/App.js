import React, { Component } from 'react'
import { injectGlobal } from 'styled-components'
import { DragDropContextProvider } from 'react-dnd'
import Html5Backend from 'react-dnd-html5-backend'

import Page from './components/Page'
import Workspace from './components/Workspace'
import Toolbar from './components/Toolbar'
import FieldMarker from './components/FieldMarker';

injectGlobal`
  body, html, #root {
    margin: 0;
    padding: 0;
    height: 100%;
  }
`

class App extends Component {
  state = {
    fields: [],
    toolbar: {
      top: 20,
      left: 20
    }
  }

  nextId = 1

  handleAddField = (field, destination) => {
    this.setState(state => ({
      fields: [...state.fields, {
        ...field.template,
        pageId: destination.page.id,
        top: destination.position.top - field.template.height / 2,
        left: destination.position.left - field.template.width / 2,
        fieldId: `field_${this.nextId++}`
      }]
    }))
  }

  handleMoveField = (fieldId, destination) => {
    this.setState(state => {
      const target = state.fields.find(f => f.fieldId === fieldId)
      const targetIndex = state.fields.indexOf(target)

      var newArray = [...state.fields]
      newArray[targetIndex] = {
        ...target,
        top: destination.offset.top + target.top,
        left: destination.offset.left + target.left
      }
      return {
        fields: newArray
      }
    })
  }

  handleToolbarMove = dest => {
    this.setState({
      toolbar: {
        top: dest.top,
        left: dest.left
      }
    })
  }

  render() {
    return (
      <DragDropContextProvider backend={Html5Backend}>
        <Workspace>
          <Page page={{ id: 1 }}>
            {this.state.fields.map((field) => (
              <FieldMarker onMoveField={this.handleMoveField} key={field.fieldId} {...field} />
            ))}
          </Page>
          <Toolbar top={this.state.toolbar.top} left={this.state.toolbar.left} onAddField={this.handleAddField} onMove={this.handleToolbarMove} />
        </Workspace>
      </DragDropContextProvider>
    );
  }
}

export default App;
