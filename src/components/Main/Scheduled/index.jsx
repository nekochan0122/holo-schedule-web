import React, { useState, useEffect } from 'react'

import { Grid, Typography, Divider } from '@material-ui/core'
import ScheduleIcon from '@material-ui/icons/Schedule'

import HoloList from '../HoloList'
import { getScheduled } from '../../../request'

const Scheduled = _ => {
  const [scheduled, setScheduled] = useState()

  const fetchData = async (setFunc, func) => {
    const response = await func()
    setFunc(response)
  }

  useEffect(_ => {
    const refresh = setInterval(function () {
      fetchData(setScheduled, getScheduled)
    }(), 60 * 1000)

    return () => clearInterval(refresh)
  }, [])

  return (
    <>
      <Grid id='scheduled_lives' container direction='row' alignItems='center'>
        <ScheduleIcon color='primary' />
        &nbsp;
        <Typography variant='h6' color='primary' >
          Scheduled Lives ({scheduled === undefined ? '' : scheduled.length})
        </Typography>
      </Grid>

      <Divider />

      <HoloList holoData={scheduled} />
    </>
  )
}

export default Scheduled
