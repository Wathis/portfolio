import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

function ProjectTile({ title, img, color, classes, ...other }) {
  return (
    <div style={{backgroundUrl: img}} className={classes.root} {...other}>
      <span className={classes.title}>{title}</span>
    </div>
  )
}

ProjectTile.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  color: PropTypes.string
}

ProjectTile.defaultProps = {
  color: "",
}

const cardDimension = '50vh'

export default withStyles(theme => ({
  root: {
    boxShadow: ' 0px 0px 30px 0px rgba(0,0,0,0.1)',
    width: cardDimension,
    height: cardDimension,
    borderRadius: 2,
    position: 'relative',
    cursor: 'pointer'
  },
  title: {
    fontSize: '1.2em',
    textAlign: 'center',
    display: 'block',
    position: 'absolute',
    height: 15,
    width: cardDimension,
    top: 'calc(50% - 15px)'
  },
}))(ProjectTile)

