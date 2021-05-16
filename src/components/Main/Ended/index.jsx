import React, { useState, useEffect } from 'react'

import { Grid, Typography, Divider } from '@material-ui/core'
import AlarmOnIcon from '@material-ui/icons/AlarmOn'

import HoloList from '../HoloList'
import { getEnded } from '../../../request'

const Ended = _ => {
  const [ended, setEnded] = useState()

  const fetchData = async (setFunc, func) => {
    const response = await func()
    setFunc(response)
  }

  useEffect(_ => {
    fetchData(setEnded, getEnded)

    const refresh = setInterval(() => {
      fetchData(setEnded, getEnded)
    }, 60 * 1000)

    return () => clearInterval(refresh)
  }, [])

  return (
    <>
      <Grid id='ended' container direction='row' alignItems='center'>
        <AlarmOnIcon color='primary' />
        &nbsp;
        <Typography variant='h6' color='primary' >
          Ended ({ended === undefined ? '' : ended.length})
        </Typography>
      </Grid>

      <Divider />

      <HoloList holoData={ended} />
    </>
  )
}

export default Ended
