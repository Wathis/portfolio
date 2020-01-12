import React from 'react'
import PropTypes from 'prop-types'
import ProjectTile from './ProjectTile';
import { withStyles } from '@material-ui/styles';
import Title from './Title';

function Projects({ projects, classes,  }) {

  const onClickProjet = () => {

  };

  return (
    <div className={classes.root}>
      <Title className={classes.title} value="My portfolio" />
      <div className={classes.container}>
        {
          Object.keys(projects).map((projectName) => (
            <ProjectTile onClick={onClickProjet} title={projects[projectName].title} img={projects[projectName].img} color={projects[projectName].color} />
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

