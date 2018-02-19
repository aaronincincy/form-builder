import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { injectGlobal } from 'styled-components'
import { DragDropContextProvider } from 'react-dnd'
import Html5Backend from 'react-dnd-html5-backend'

import store from './store'

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
    fields: []
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
      const target = state.fields.filter(f => f.fieldId === fieldId)[0]
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

  render() {
    return (
      <Provider store={store}>
        <DragDropContextProvider backend={Html5Backend}>
          <Workspace>
            <Page page={{ id: 1 }}>
              {this.state.fields.map((field) => (
                <FieldMarker onMoveField={this.handleMoveField} key={field.fieldId} {...field} />
              ))}
            </Page>
            <Toolbar onAddField={this.handleAddField} />
          </Workspace>
        </DragDropContextProvider>
      </Provider>
    );
  }
}

export default App;
