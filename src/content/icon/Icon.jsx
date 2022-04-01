import React from 'react';
import PropTypes from 'prop-types';

//import icons from './icons.json' assert {type: 'json'};
const icons = require('./icons.json');

export const Icon = ({ name, width, height, ...props }) => {
  if (icons[name]) {
    let { [name]: { viewBox = '', markup = '' } } = icons;
    
    return (
        <svg
          aria-hidden
          dangerouslySetInnerHTML={{ __html: markup }}
          focusable='false'
          height={height}
          viewBox={viewBox}
          width={width}
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        />
    );
  }
  return null;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

Icon.defaultProps = {
  width: '1em',
  height: '1em',
};
