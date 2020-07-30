import React from 'react';

import './Recommand.css';
import VideoCard from './VideoCard';

const RecommandedVideos = () => {
  return (
    <div className='recommandedVideos'>
      <h2>Recommanded</h2>

      <div className='recommandedVideos__videos'>
        {/* title */}
        {/* channelName */}
        {/* View  */}
        {/* Time Stamp */}
        <VideoCard
          title='Help Me Plan My Upcoming JavaScript Course'
          views='2.3M Views'
          channel='Web Dev Simplified'
          channelImage='https://yt3.ggpht.com/a/AATXAJzlhhukYsdgVeuIspbug5SNo_254oqP9ZyrY2E0=s48-c-k-c0xffffffff-no-rj-mo'
          image='https://i.ytimg.com/vi/NykJhYdBoqU/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCTda4AOi10pfid4d2u56krclF29w'
          timestamp='18 days ago'
        />
        <VideoCard
          image='https://i.ytimg.com/an_webp/EzNcBhSv1Wo/mqdefault_6s.webp?du=3000&sqp=CJarjPkF&rs=AOn4CLA_pC-yl2GC5f7eJLcuQ9k_Pm6K6A'
          title='Build a crud API with Node.js + Express'
          channel='Coding Garden'
          channelImage='https://yt3.ggpht.com/a-/AOh14Gj2IltSGzbRNN4N18hIhgLY6_cRMx0DVkjxmA=s68-c-k-c0x00ffffff-no-rj-mo'
          views='1.3M Views'
          timestamp='10 days ago'
        />
        <VideoCard
          title='Moder Javscript Crash course'
          channel='The Net Ninja'
          channelImage='https://yt3.ggpht.com/a/AATXAJyWnmk6Ql70o3P-x2eHIR01SiiYamhspnAN04zhWA=s100-c-k-c0xffffffff-no-rj-mo'
          image='https://i.ytimg.com/vi/iWOYAxlnaww/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLChF-ZnH6Vm9rQcco_ISZ5AS7MgPA'
          timestamp='1 days ago'
          views='10M Views'
        />
        <VideoCard
          title='Learn Figma'
          channel='Dev Ed'
          channelImage='https://yt3.ggpht.com/a/AATXAJzj9Wp5NIzuIcB3DhQ5jgunW5b98DCWGeSv2TZptQ=s176-c-k-c0x00ffffff-no-rj-mo'
          image='https://i.ytimg.com/vi/4W4LvJnNegA/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCo3-kehrmN8jfNnyFxbdQcFl8zpQ'
          timestamp='1days ago'
          views='1M Views'
        />
        {/* <VideoCard
          title=''
          channel=''
          channelImage=''
          image=''
          timestamp=''
          views=''
        /> */}
      </div>
    </div>
  );
};

export default RecommandedVideos;
