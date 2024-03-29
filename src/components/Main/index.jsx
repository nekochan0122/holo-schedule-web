import React, { useEffect, useState } from 'react'

import PubSub from 'pubsub-js'

import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Current from './Current'
import Scheduled from './Scheduled'
import About from './About'
import Ended from './Ended'

const Main = _ => {
  const [drawerStatus, setDrawerStatus] = useState(false)

  useEffect(_ => {
    const drawerSubToken = PubSub.subscribe('DrawerStatus', (_, data) => setDrawerStatus(data))

    return _ => PubSub.unsubscribe(drawerSubToken)
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
      <Ended />
      <About />
    </Container>
  )
}

export default Main
