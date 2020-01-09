import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles';

function Title({ value, classes, className, ...other }) {
  return (
    <div className={clsx(classes.root, className)} {...other}>
      {value}
    </div>
  )
}

Title.propTypes = {
  value: PropTypes.string.isRequired
}

export default withStyles(theme => ({
  root: {
    fontSize: '1.5em',
    textAlign: 'center'
  }
}))(Title);

