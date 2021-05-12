import React, { useEffect, useState } from 'react'

import dayjs from 'dayjs'
import relativeTime  from 'dayjs/plugin/relativeTime'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography, Avatar } from '@material-ui/core'

import { getMembers, getChannels } from '../../../request'

dayjs.extend(relativeTime)

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: 15,
  },
  item: {
    marginBottom: 20,
    marginRight: 20,
  },
  card: {
    width: 337,
    '&:hover': {
      boxShadow: `8px 8px 10px ${theme.palette.grey[500]}`
    }
  },
  title: {
    textOverflow: 'ellipsis',
  },
  bold: {
    fontWeight: 'bold'
  },
  link: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
    '&:focus, &:hover, &:visited, &:link, &:active': {
      textDecoration: 'none',
    },
  }
}))

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
      props.holoData.map(curObj => {
        return (
          <Grid item key={curObj.id} className={classes.item}>
            <HoloCard {...curObj} classes={classes}
              member={
                members.find(memObj => {
                  return memObj.id === channels.find(chaObj => {
                    return chaObj.channel === curObj.channel
                  }).member_id
                })
              }/>
          </Grid>
        )
      })
    }</Grid>
  )
}

const HoloCard = props => {

  return (
    <a className={props.classes.link} href={`https://youtu.be/${props.room}`} target='_blank' rel="noreferrer" >
      <Card className={props.classes.card} raised>
        <CardActionArea>
          <CardMedia className={props.classes.title} image={props.cover} component='img' />
          <CardContent>
            <Typography variant='inherit' gutterBottom noWrap component='h2'>{props.title}</Typography>
            <Grid container spacing={1} alignItems='center'>
              <Grid item>
                <Avatar src={props.member.avatar} />
              </Grid>
              <Grid item>
                <Typography className={props.classes.bold} >
                  {props.member.name}
                </Typography>
                <Typography className={props.classes.bold} variant='body2' color='textPrimary'>
                  {dayjs(props['start_at']).fromNow()}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </a>
  )
}

export default HoloList
