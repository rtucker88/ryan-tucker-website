import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Youtube from './youtube'

const Presentation = ({ description, link, img, title }) => (
  <div className="presentation">
    {link.includes('youtube') ? <Youtube width="600" height="480" src={link}/> : <a href={link}>
      <Img sizes={img} width="30rem"/>
    </a>}
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
)

Presentation.propTypes = {
  img: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default Presentation