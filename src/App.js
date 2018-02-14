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
    fields: []
  }

  nextId = 1

  handleAddField = (field, destination) => {
    this.setState(state => ({
      fields: [...state.fields, {
        ...field.template,
        pageId: destination.page.id,
        top: destination.top - field.template.height / 2,
        left: destination.left - field.template.width / 2,
        fieldId: `field_${this.nextId++}`
      }]
    }))
  }

  render() {
    return (
      <DragDropContextProvider backend={Html5Backend}>
        <Workspace>
          <Page page={{ id: 1 }}>
            {this.state.fields.map((field) => (
              <FieldMarker key={field.fieldId} {...field} />
            ))}
          </Page>
          <Toolbar onAddField={this.handleAddField} />
        </Workspace>
      </DragDropContextProvider>
    );
  }
}

export default App;
