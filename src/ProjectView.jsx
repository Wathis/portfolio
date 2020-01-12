import React from 'react'
import PropTypes from 'prop-types'
import {
  useParams
} from "react-router-dom";
import Title from './Title';
import {projects} from './projects.json'

function ProjectView(props) {
    let { projectName } = useParams();
    return (
        <div>
            <Title value={projectName}/>
            <div>
                {
                    projects[projectName].description
                }
            </div>
        </div>
    )
}

ProjectView.propTypes = {

}

export default ProjectView

