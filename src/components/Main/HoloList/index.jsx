import React, { useEffect, useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

import HoloCard from './HoloCard'
import { getMembers, getChannels } from '../../../request'

const useStyles = makeStyles({
  container: {
    marginTop: 15,
  },
  item: {
    marginBottom: 20,
    marginRight: 20,
  },
})

const HoloList = props => {
  const classes = useStyles()
  const [members, setMembers] = useState([])
  const [channels, setChannels] = useState([])

  useEffect(() => {
    fetchData(setMembers, getMembers)
    fetchData(setChannels, getChannels)
  }, [])

  async function fetchData (setFunc, func) {
    const response = await func()
    setFunc(response)
  }

  return (
    <Grid container justify='flex-start' className={classes.container}>{
      props.holoData === undefined || members.length === 0 || channels.length === 0 ?
      <Typography variant='h6'>Loading...</Typography> :
      props.holoData.map(dataObj => (
        <Grid item key={dataObj.id} className={classes.item}>
          <HoloCard {...dataObj} member={members.find(memObj => {
            return memObj.id === channels.find(chaObj => {
              return chaObj.channel === dataObj.channel
            }).member_id
          })}/>
        </Grid>
      ))
    }</Grid>
  )
}

export default HoloList
