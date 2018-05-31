import React from 'react';
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const Presentation = ({ description, link, img, title }) => (
  <div className="presentation">
    <a href={link}>
      <Img sizes={img} width="30rem" />
    </a>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

Presentation.propTypes = {
  img: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Presentation;