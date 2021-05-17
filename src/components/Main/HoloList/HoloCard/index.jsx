import React from 'react'

import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import relativeTime  from 'dayjs/plugin/relativeTime'

import { makeStyles } from '@material-ui/core/styles'
import { Card, CardActionArea, CardMedia, CardContent, Typography, Grid, Avatar } from '@material-ui/core'

dayjs.extend(localizedFormat).extend(relativeTime)

const useStyles = makeStyles(theme => ({
  card: {
    width: 337,
    '&:hover': {
      boxShadow: `3px 3px 5px ${theme.palette.grey[500]}`
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
  },
  name: {
    fontWeight: 'bold',
    fontSize: '17px',
  }
}))

const HoloCard = props => {
  const classes = useStyles()

  const time = dayjs(props['start_at'])

  const { platform, room, cover, title, member } = props

  let link, showPlatform

  switch(platform) {
    case 'youtube' :
      link = `https://youtu.be/${room}`
      showPlatform = 'YouTube'
      break

    case 'twitch' :
      link = `https://www.twitch.tv/${room}`
      showPlatform = 'Twitch'
      break

    default :
      link = '#'
      showPlatform = 'Unknow'
  }

  return (
    <a className={classes.link} href={link} target='_blank' rel="noreferrer" >
      <Card className={classes.card} raised>
        <CardActionArea>
          <CardMedia className={classes.title} image={cover} width='337' height='190' component='img' />
          <CardContent>
            <Typography variant='inherit' gutterBottom noWrap component='h2'>{title}</Typography>
            <Grid container spacing={1} alignItems='center'>
              <Grid item>
                <Avatar src={member.avatar} />
              </Grid>
              <Grid item>
                <Typography className={classes.name} >
                  {member.name} | {showPlatform}
                </Typography>
                <Typography className={classes.bold} variant='body2' color='textPrimary'>
                  {time.format('LT')} , {time.fromNow()}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </a>
  )
}

export default HoloCard