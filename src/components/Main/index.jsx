import React, { useEffect, useState } from 'react'

import PubSub from 'pubsub-js'

import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Current from './Current'
import Scheduled from './Scheduled'
import About from './About'

const Main = _ => {
  const [drawerStatus, setDrawerStatus] = useState(false)

  useEffect(() => {
    const drawerSubToken = PubSub.subscribe('DrawerStatus', (_, data) => setDrawerStatus(data))

    return () => PubSub.unsubscribe(drawerSubToken)
  }, [])

  const useStyle = makeStyles(theme => ({
    container: {
      // backgroundColor: theme.palette.grey[800],
      minHeight: `${window.innerHeight}px`,
      paddingTop: `${theme.mixins.toolbar.minHeight + 25}px`,
      paddingLeft: drawerStatus ? '260px' : '92px',
      transition: theme.transitions.create('padding-left', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }
  }))

  const classes = useStyle()

  return (
    <Container className={classes.container} maxWidth='xl'>
      <Current />
      <Scheduled />
      <About />
    </Container>
  )
}

export default Main
