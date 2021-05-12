import React, { useState, useEffect } from 'react'

import { Grid, Typography, Divider } from '@material-ui/core'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'

import HoloList from '../HoloList'
import { getCurrent } from '../../../request'

const Current = _ => {
  const [current, setCurrent] = useState()

  const fetchData = async (setFunc, func) => {
    const response = await func()
    setFunc(response)
  }

  useEffect(_ => {
    fetchData(setCurrent, getCurrent)

    const refresh = setInterval(() => {
      fetchData(setCurrent, getCurrent)
    }, 60 * 1000)

    return () => clearInterval(refresh)
  }, [])

  return (
    <>
      <Grid id='live' container direction='row' alignItems='center'>
        <PlayArrowIcon color='primary' />
        &nbsp;
        <Typography variant='h6' color='primary' >
          Live ({current === undefined ? '' : current.length})
        </Typography>
      </Grid>

      <Divider />

      <HoloList holoData={current} />
    </>
  )
}

export default Current
