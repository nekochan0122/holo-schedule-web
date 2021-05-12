import React from 'react'

import { CssBaseline } from '@material-ui/core'

// import { darkTheme } from './theme'
import Menu from './components/Menu'
import Main from './components/Main'

const App = _ => {
  return (
    <>
      <CssBaseline />
      {/* <ThemeProvider> */}
        <Menu />
        <Main />
      {/* </ThemeProvider> */}
    </>
  )
}

export default App