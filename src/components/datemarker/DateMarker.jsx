import React from 'react';
import PropTypes from 'prop-types';
import './datemarker.scss';

export const DateMarker = ({ color, size, month, day, ...props }) => {
    return (
      <div
        className={['datemarker', `datemarker--${size}`].join(' ')}
        {...props}
      >
        <div
          aria-hidden='true'
          className={['datemarker__month', `datemarker__month--${size}`].join(' ')}
          style={{backgroundColor: color, borderColor: color}} 
        >
          {month}
        </div>
        <div
          aria-hidden='true'
          className={['datemarker__day', `datemarker__day--${size}`].join(' ')}
        >
          {day}
        </div>
      </div>
    );
};

DateMarker.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'large']),
  month: PropTypes.string.isRequired,
  day: PropTypes.number.isRequired,
};

DateMarker.defaultProps = {
  size: 'large',
};
  