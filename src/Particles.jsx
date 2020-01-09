import React from 'react'
import PropTypes from 'prop-types'
import { Particles as ParticlesLib } from 'react-particles-js'

function Particles(props) {
  return (
    <div style={{ top: 0, bottom: 0, height: '100vh', width: '100vw', position: 'absolute' }}>
      <ParticlesLib params={params} />
    </div>
  )
}

const params = {
  "particles": {
    "number": {
      "value": 60,
      "density": {
        "enable": true,
        "value_area": 1500
      }
    },
    "line_linked": {
      "enable": true,
      "opacity": 0.02
    },
    "move": {
      "direction": "right",
      "speed": 0.05
    },
    "size": {
      "value": 1
    },
    "opacity": {
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.05
      }
    }
  },
  "interactivity": {
    "events": {
      "onclick": {
        "enable": true,
        "mode": "push"
      }
    },
    "modes": {
      "push": {
        "particles_nb": 1
      }
    }
  },
  "retina_detect": true
};

Particles.propTypes = {

}

export default Particles

