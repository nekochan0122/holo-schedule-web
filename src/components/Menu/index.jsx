import React, { useState } from 'react'

import PubSub from 'pubsub-js'

import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { Drawer, AppBar, Toolbar, List, ListItem, ListItemIcon, ListItemText, Link, Typography, Divider, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import ScheduleIcon from '@material-ui/icons/Schedule'
import AlarmOnIcon from '@material-ui/icons/AlarmOn'
import Brightness7Icon from '@material-ui/icons/Brightness7' // light
import Brightness4Icon from '@material-ui/icons/Brightness4' // dark

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center ',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  link: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
    '&:focus, &:hover, &:visited, &:link, &:active': {
      textDecoration: 'none',
    },
  },
  title: {
    flexGrow: 1,
  }
}))

export default function Menu() {
  const classes = useStyles()

  const [open, setOpen] = useState(false)

  const localData = localStorage.getItem('HoloScheduleTheme')

  const [curTheme, setCurTheme] = useState(
    localData === null ? true : localData === 'light'
  ) // false = dark

  const handleDrawerOpen = _ => {
    PubSub.publish('DrawerStatus', true)
    setOpen(true)
  }

  const handleDrawerClose = _ => {
    PubSub.publish('DrawerStatus', false)
    setOpen(false)
  }

  const switchTheme = _ => {
    PubSub.publish('Theme', !curTheme)
    setCurTheme(!curTheme)
  }

  return (
    <>
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}>
        <Toolbar>
          <IconButton
            color='secondary'
            edge='start'
            className={clsx(classes.menuButton, { [classes.hide]: open })}
            onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
          <Typography color='secondary' className={classes.title} variant='h5' noWrap>
            HoloSchedule
          </Typography>
          <IconButton onClick={switchTheme}>{
            curTheme ?
            <Brightness7Icon color='secondary' /> :
            <Brightness4Icon color='secondary' />
          }</IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}>
        <List className={classes.toolbar} onClick={handleDrawerClose}>
           <ListItem button className={classes.toolbar} >
            <ListItemIcon>
              <ChevronLeftIcon />
            </ListItemIcon>
          </ListItem>
        </List>
        <Divider />
        <List>
          {['Live', 'Scheduled Lives', 'Ended'].map((text, index) => (
            <Link
              key={text}
              className={classes.link}
              href={`#${text.replaceAll(' ', '_').toLowerCase()}`}>
              <ListItem>
                <ListItemIcon>{
                  index === 0 ? <PlayArrowIcon /> :
                  index === 1 ? <ScheduleIcon /> : <AlarmOnIcon />
                }</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
      </Drawer>
    </>
  )
}
