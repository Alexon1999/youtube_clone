import React from 'react';

import './VideoRow.css';

const VideoRow = ({
  image,
  title,
  channel,
  description,
  views,
  timestamp,
  subs,
}) => {
  return (
    <div className='videoRow'>
      <img src={image} alt='' />

      <div className='videoRow__text'>
        <h3>{title}</h3>
        <p className='videoRow__headLine'>
          {channel} .{' '}
          <span className='videoRow__subs'>
            <span className='videoRow__subsNumber'>{subs}</span> Subscribers .{' '}
          </span>{' '}
          <span>{views}</span> views . {timestamp}
        </p>
        <p className='videoRow__description'>{description}</p>
      </div>
    </div>
  );
};

export default VideoRow;
