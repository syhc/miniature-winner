import React from 'react';
import PropTypes from 'prop-types';

import { Heading } from '../../typography/heading/Heading';
import './card.scss';

export const Card = ({ title, url, description, image, imagePosition, label, labelUrl, maxWidth, ...props }) => {
  const card = [];

  let cardImage = (
    <div
      aria-hidden
      className='card__image-container'
    >
      <img
        src={image} 
        className='card__image'
      />
    </div>
  );
  if (url) {
    cardImage = (
      <a
        aria-hidden
        href={url}
        style={{zIndex: 1}}
      >
        {cardImage}
      </a>
    );
  }

  let cardBody = [];
  if (label && labelUrl) {
    cardBody.push(
      <div
      className='card__label'
      >
        <a
          className='link link--inverse'
          href={labelUrl}
        >
          {label}
        </a>
      </div>
    );  
  }
  cardBody.push(
    <Heading
      heading={title}
      url={url}
      level="1"
      size="large"
    />
  );
  if (description) {
    cardBody.push(
      <p
        className='card__text'
      >
        {description}
      </p>
    );
  }

  
  if ('top' === imagePosition || 'left' === imagePosition) {
    card.push(cardImage);
  }
  if ('left' === imagePosition || 'right' === imagePosition) {
    cardBody = (
      <div>
        {cardBody}
      </div>
    );
  }
  card.push(
    <div
      className={['card__body', `card__body--${imagePosition}`].join(' ')}
    >
      {cardBody}
    </div>
  );
  if ('right' === imagePosition || 'bottom' === imagePosition) {
    card.push(cardImage);
  }

  return (
    <div
      className={['card', `card--${imagePosition}`].join(' ')}
      style={{maxWidth}}
      {...props}
    >
      {card}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  imagePosition: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  label: PropTypes.string,
  labelUrl: PropTypes.string,
  maxWidth: PropTypes.string,
};

Card.defaultProps = {
  imagePosition: 'left',
  maxWidth: null,
};
