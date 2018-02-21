import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { injectGlobal } from 'styled-components'
import { DragDropContextProvider } from 'react-dnd'
import Html5Backend from 'react-dnd-html5-backend'

import store from './store'
import Page from './components/Page'
import Workspace from './components/Workspace'
import Toolbar from './components/Toolbar'
import Sidebar from './components/Sidebar';

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

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

  body, html, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Roboto Condensed', sans-serif;
  }
`

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <DragDropContextProvider backend={Html5Backend}>
          <Workspace>
            <Page page={{ id: 1 }} />
            <Sidebar>
              <Sidebar.Panel title="Quick Fields" defaultExpanded>
                <Toolbar fieldTemplate={boundField('firstName')}>First Name</Toolbar>
                <Toolbar fieldTemplate={boundField('lastName')}>Last Name</Toolbar>
                <Toolbar fieldTemplate={boundField('emailAddress')}>Email Address</Toolbar>
                <Toolbar fieldTemplate={boundField('homePhone')}>Home Phone</Toolbar>
              </Sidebar.Panel>
              <Sidebar.Panel title="Basic Fields">
                <Toolbar fieldTemplate={textBox}>Text Box</Toolbar>
                <Toolbar fieldTemplate={checkbox}>Checkbox</Toolbar>
              </Sidebar.Panel>
            </Sidebar>
            <Sidebar right>
              <Sidebar.Panel title="Field Settings" defaultExpanded>
                Stuff
              </Sidebar.Panel>

              <Sidebar.Panel title="Advanced">
                Stuff
              </Sidebar.Panel>
            </Sidebar>
          </Workspace>
        </DragDropContextProvider>
      </Provider>
    );
  }
}

export default App;
