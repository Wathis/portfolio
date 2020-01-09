import React from 'react'
import PropTypes from 'prop-types'
import ProjectTile from './ProjectTile';
import { withStyles } from '@material-ui/styles';
import Title from './Title';

function Projects({ projects, classes }) {
  return (
    <div className={classes.root}>
      <Title className={classes.title} value="My portfolio" />
      <div className={classes.container}>
        {
          projects.map((project) => (
            <ProjectTile title={project.title} img={project.img} color={project.color} />
          ))
        }
      </div>
    </div>

  )
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired
}

export default withStyles(theme => ({
  root: {

  },
  title: {
    marginTop: 20
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: '40px 50px'
  }
}))(Projects);

