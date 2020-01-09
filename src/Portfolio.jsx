import React from 'react'
import Header from './Header'
import Projects from './Projects'
import { withStyles } from '@material-ui/core'

const projects = [{
  title: 'Notee',
  img: 'url',
  color: 'red'
}, {
  title: 'Vocs',
  img: 'url',
  color: 'red'
}, {
  title: 'Washing Machine',
  img: 'url',
  color: 'red'
},];

function Portfolio({ classes }) {
  return (
    <div className={classes.root}>
      <Header />
      <Projects projects={projects} />
    </div>
  )
}

export default withStyles(theme => ({
  root: {
    backgroundColor: theme.color.backgroundColor
  },
}))(Portfolio);
