import React from 'react'
import PropTypes from 'prop-types'
import Particles from './Particles'
import Title from './Title'
import clsx from 'clsx'
import { withStyles } from '@material-ui/styles';
import { IoIosArrowDropdownCircle } from "react-icons/io"

function Header({ classes }) {
  return (
    <div className={classes.root}>
      <Title style={{ fontSize: '3em' }} className={classes.title} value="Mathis DELAUNAY" />
      <Title style={{ color: 'white' }} value="Web & mobile developper" />
      <div className={clsx(classes.arrowDown, "upAndDown")} > <IoIosArrowDropdownCircle /></div>
      <Particles />
    </div>
  )
}

Header.propTypes = {

}


export default withStyles(theme => ({
  root: {
    height: '100vh', backgroundColor: 'black',
    position: 'relative'
  },
  title: {
    paddingTop: '40vh',
    color: 'white'
  },
  arrowDown: {
    color: 'white',
    position: 'absolute',
    bottom: 50,
    left: 'calc(50% - 1em)',
    fontSize: '2em'
  }
}))(Header);

