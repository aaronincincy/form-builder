import React, { Component } from 'react'
import { Provider } from 'react-redux'
import styled, { injectGlobal } from 'styled-components'
import { DragDropContextProvider } from 'react-dnd'
import Html5Backend from 'react-dnd-html5-backend'

import store from './store'
import Page from './components/Page'
import Workspace from './components/Workspace'
import { LeftSidebar, RightSidebar } from './components/Sidebar';
import Footer from './Footer'



injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

  body, html, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Roboto Condensed', sans-serif;
  }
`

const Header = styled.header`
  background: black;
  color: #b4b4b4;
  padding: 20px;

  & h1{
    margin: 0;
  font-weight:normal;
  }
`

Header.displayName = 'Header'

const BaseApp = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Area = styled.div`
  height: 100%;
  position: relative;
  flex: 1 1 auto;
  display: flex;
`

Area.displayName = 'Area'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <DragDropContextProvider backend={Html5Backend}>
          <BaseApp>
            <Header>
              <h1>Form Builder v0.1</h1>
            </Header>
            <Area>
              <Workspace>
                <Page page={{ id: 1 }} />
              </Workspace>
              <LeftSidebar />
              <RightSidebar />
            </Area>
            <Footer>
              <Footer.Button>Save Changes</Footer.Button>
            </Footer>
          </BaseApp>
        </DragDropContextProvider>
      </Provider>
    )
  }
}

export default App