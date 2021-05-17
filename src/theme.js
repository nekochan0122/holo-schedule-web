import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#53c2a0',
    },
    secondary: {
      main: '#efefef',
    },
  }
})

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#53c2a0',
    },
    secondary: {
      main: '#efefef',
    },
  },
})

export { theme, darkTheme }