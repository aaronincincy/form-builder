import React, { Component } from 'react'
import { injectGlobal } from 'styled-components'

import Page from './components/Page'
import Workspace from './components/Workspace'

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
      <Workspace>
        <Page />
      </Workspace>
    );
  }
}

export default App;
