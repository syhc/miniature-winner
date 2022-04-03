import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import { Heading } from '../../content/heading/Heading';
import { Icon } from '../../content/icon/Icon';
import './accordion.scss';

const AccordionItem = ({ title, content, ...props }) => {
  const [headingId] = useState(`id-${uuidv4()}`);
  const [bodyId] = useState(`id-${uuidv4()}`);
  const [isExpanded, setIsExpanded] = useState(false);

  const icon = isExpanded ? 'angle-down' : 'angle-right';
  const display = isExpanded ? 'block' : 'none';

  const size = props.size ?? 'medium';
  const level = props.level ?? 2;

  return (
    <div
      className='accordion__item'
    >
      <button
        aria-controls={bodyId}
        aria-expanded={isExpanded}
        className='accordion__heading'
        id={headingId}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span
          className='accordion__icon'
        >
          <Icon
            name={icon}
            width='1.5em'
            height='1.5em' 
          />
        </span>
        <Heading 
          heading={title}
          level={level}
          size={size}
          style={{margin: 0}}
        />
      </button>
      <div
        aria-labelledby={headingId}
        className='accordion__body'
        id={bodyId}
        role='region'
        style={{ display: display }}
        tabIndex='-1'
      >
        {content}
      </div>
    </div>
  );
};

export const Accordion = ({ items, ...props }) => {
  const maxWidth = props.maxWidth ?? null;

  const accordion = items.map(
    item => <AccordionItem
      key={item.title}
      title={item.title}
      content={item.content}
    />
  );

  return (
    <div
      className='accordion'
      style={{maxWidth}}
    >
      {accordion}
    </div>
  )
};

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string,
    }),
  ),
};