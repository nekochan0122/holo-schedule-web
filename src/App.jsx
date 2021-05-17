import React, { useState, useEffect } from 'react'

import PubSub from 'pubsub-js'

import { CssBaseline, ThemeProvider } from '@material-ui/core'

import { theme, darkTheme } from './theme'
import Menu from './components/Menu'
import Main from './components/Main'

const App = _ => {
  const localData = localStorage.getItem('HoloScheduleTheme')

  const [curTheme, setCurTheme] = useState(
    localData === null ? theme : localData === 'light' ? theme : darkTheme
  )

  useEffect(_ => {
    localStorage.setItem('HoloScheduleTheme', curTheme.palette.type)
  })

  useEffect(_ => {
    PubSub.subscribe('Theme', (_, data) => {
      data ? setCurTheme(theme) : setCurTheme(darkTheme)
    })
    return _ => PubSub.unsubscribe('Theme')
  }, [])

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={curTheme}>
        <main style={{ backgroundColor: curTheme.palette.background.default  }}>
          <Menu />
          <Main />
        </main>
      </ThemeProvider>
    </>
  )
}

export default App