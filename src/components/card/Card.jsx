import React from 'react';
import PropTypes from 'prop-types';

import { Heading } from '../../content/heading/Heading';
import './card.scss';

export const Card = ({ title, url, description, image, imagePosition, label, labelUrl, border, ...props }) => {
  const card = [];
  const size = props.size ?? 'medium';
  const level = props.level ?? 2;
  const maxWidth = props.maxWidth ?? null;

  let cardImage = (
    <img
      src={image} 
      className='card__image'
    />
  );
  if (url) {
    cardImage = (
      <a
        aria-hidden
        className='card__image-container'
        href={url}
        style={{zIndex: 1}}
      >
        {cardImage}
      </a>
    );
  } else {
    cardImage = (
      <div
        aria-hidden
        className='card__image-container'
      >
        {cardImage}
        </div>
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
      level={level}
      size={size}
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
  const bodyBorder = border ? 'card__body--border' : 'card_body--borderless';
  card.push(
    <div
      className={['card__body', bodyBorder, `card__body--${imagePosition}`].join(' ')}
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
  border: PropTypes.bool,
};

Card.defaultProps = {
  imagePosition: 'left',
  border: true,
};
