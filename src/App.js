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

const template1 = {
  width: 100,
  height: 30,
  type: 'text'
}

const template2 = {
  width: 30,
  height: 30,
  type: 'checkbox'
}

injectGlobal`
  body, html, #root {
    margin: 0;
    padding: 0;
    height: 100%;
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
              <Sidebar.Panel>
                <Toolbar>
                  <Toolbar.Item fieldTemplate={template1}>Text</Toolbar.Item>
                  <Toolbar.Item fieldTemplate={template2}>Checkbox</Toolbar.Item>
                </Toolbar>
              </Sidebar.Panel>
            </Sidebar>
            <Sidebar right>
              <Sidebar.Panel />
            </Sidebar>
          </Workspace>
        </DragDropContextProvider>
      </Provider>
    );
  }
}

export default App;
