import React from 'react';
import PropTypes from 'prop-types';

const Youtube = ({ src, width, height }) => (
  <iframe width={width} height={height}
          src={src} frameBorder="0"
          allow="autoplay; encrypted-media" allowFullScreen></iframe>
);

Youtube.propTypes = {
  src: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

export default Youtube;