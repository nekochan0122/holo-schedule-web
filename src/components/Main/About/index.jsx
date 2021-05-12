import React from 'react'

import {  Divider, Typography, Link } from '@material-ui/core'

const About = _ => {
  return (
    <>
      <Divider />

      <Typography align='center' variant='subtitle2' color='textPrimary' >
        Powered by
        <Link href='https://github.com/YunzheZJU/non-stop-story'> Non-stop-story</Link>
        <br />
        Discord : NekoChan#2851
      </Typography>
    </>
  )
}

export default About