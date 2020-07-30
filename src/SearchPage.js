import React from 'react';

import './SearchPage.css';

import TuneOutLinedIcon from '@material-ui/icons/TuneOutlined';

import { useParams } from 'react-router-dom';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

const SearchPage = () => {
  return (
    <div className='searchPage'>
      <div className='searchPage__filter'>
        <TuneOutLinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />

      <ChannelRow
        image='https://avatars3.githubusercontent.com/u/55364947?s=460&v=4'
        channel='Alexon'
        verified
        subs='1.23 M'
        noOfVideos='100'
        description='You can find awesome programming courses and become a good developper by constantly growing up'
      />

      <hr />

      <VideoRow
        image='https://i.ytimg.com/an_webp/EzNcBhSv1Wo/mqdefault_6s.webp?du=3000&sqp=CJarjPkF&rs=AOn4CLA_pC-yl2GC5f7eJLcuQ9k_Pm6K6A'
        title='Build a crud API with Node.js + Express'
        channel='Coding Garden'
        views='1.3M Views'
        subs='640K'
        description='You can find awesome programming courses and become a good developper by constantly growing up'
        timestamp='10 days ago'
      />
      <VideoRow
        image='https://i.ytimg.com/an_webp/EzNcBhSv1Wo/mqdefault_6s.webp?du=3000&sqp=CJarjPkF&rs=AOn4CLA_pC-yl2GC5f7eJLcuQ9k_Pm6K6A'
        title='Build a crud API with Node.js + Express'
        channel='Coding Garden'
        views='1.3M Views'
        subs='640K'
        description='You can find awesome programming courses and become a good developper by constantly growing up'
        timestamp='10 days ago'
      />
      <VideoRow
        image='https://i.ytimg.com/an_webp/EzNcBhSv1Wo/mqdefault_6s.webp?du=3000&sqp=CJarjPkF&rs=AOn4CLA_pC-yl2GC5f7eJLcuQ9k_Pm6K6A'
        title='Build a crud API with Node.js + Express'
        channel='Coding Garden'
        views='1.3M Views'
        subs='640K'
        description='You can find awesome programming courses and become a good developper by constantly growing up'
        timestamp='10 days ago'
      />
      <VideoRow
        image='https://i.ytimg.com/an_webp/EzNcBhSv1Wo/mqdefault_6s.webp?du=3000&sqp=CJarjPkF&rs=AOn4CLA_pC-yl2GC5f7eJLcuQ9k_Pm6K6A'
        title='Build a crud API with Node.js + Express'
        channel='Coding Garden'
        views='1.3M Views'
        subs='640K'
        description='You can find awesome programming courses and become a good developper by constantly growing up'
        timestamp='10 days ago'
      />
    </div>
  );
};

export default SearchPage;
