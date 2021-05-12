import React from 'react'

import {  Divider, Typography, Link } from '@material-ui/core'

const About = _ => {
  return (
    <>
      <Divider />

      <Typography align='center' variant='subtitle2' color='textPrimary' >
        Powered by
        <Link href='https://github.com/YunzheZJU/non-stop-story' target='_blank' rel='noreferrer'>Non-stop-story</Link>
        <br />
        Discord : NekoChan#2851
        <br />
        <Link href='https://github.com/NekoChanTaiwan/holo-schedule-web' target='_blank' rel='noreferrer'>NekoChanTaiwan/holo-schedule-web</Link>
      </Typography>
    </>
  )
}

export default About