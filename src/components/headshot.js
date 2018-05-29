import React from 'react';
import PropTypes from 'prop-types';

const Headshot = ({ src, alt }) => {
  return (<img className={"headshot"} src={src} alt={alt} />);
}

Headshot.proptypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
};

export default Headshot;