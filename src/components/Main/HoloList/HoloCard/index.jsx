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

const HoloCard = props => {
  const classes = useStyles()

  const time = dayjs(props['start_at'])

  return (
    <a className={classes.link} href={`https://youtu.be/${props.room}`} target='_blank' rel="noreferrer" >
      <Card className={classes.card} raised>
        <CardActionArea>
          <CardMedia className={classes.title} image={props.cover} width='337' height='190' component='img' />
          <CardContent>
            <Typography variant='inherit' gutterBottom noWrap component='h2'>{props.title}</Typography>
            <Grid container spacing={1} alignItems='center'>
              <Grid item>
                <Avatar src={props.member.avatar} />
              </Grid>
              <Grid item>
                <Typography className={classes.bold} >
                  {props.member.name}
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