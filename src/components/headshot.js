import React from 'react';
import Img from 'gatsby-image';

const Headshot = ({ sizes }) => (
  <div className="headshot">
    <Img sizes={sizes} />
  </div>
)

export default Headshot;
