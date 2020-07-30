import React from 'react';

import './ChannelRow.css';

import { Avatar } from '@material-ui/core';
import CheckCircleOutlineOutlined from '@material-ui/icons/CheckCircleOutlineOutlined';

const ChannelRow = ({
  subs,
  channel,
  noOfVideos,
  description,
  verified,
  image,
}) => {
  return (
    <div className='channelRow'>
      <Avatar className='channelRow__logo' src={image} />

      <div className='channelRow__text'>
        <h4>
          {channel} {verified && <CheckCircleOutlineOutlined />}
        </h4>
        <p>
          {subs} subscribers : {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ChannelRow;
