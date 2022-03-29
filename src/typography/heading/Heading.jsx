import React from 'react';
import PropTypes from 'prop-types';
import './heading.scss';

export const Heading = ({ heading, url, level, size, ...props }) => {
  const Element = `h${level}`;
  let text = heading;
  if (url) {
    text = (
      <a
        className='heading__link'
        href={url}
      >
        {heading}
      </a>
    );
  }
  return (
      <Element
        className={['heading', `heading--${size}`].join(' ')} {...props}
      >
        {text}
      </Element>
  );
};

Heading.propTypes = {
  heading: PropTypes.string.isRequired,
  url: PropTypes.string,
  level: PropTypes.number,
  size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large', 'x-large']),
};

Heading.defaultProps = {
  level: 1,
  size: 'large',
};