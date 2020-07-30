import React from 'react';

import './Sidebar.css';
import SidebarRow from './SidebarRow';

// + put the icon component as a props
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      {/* //+  put the icon component as a props */}
      {/*  //* icon is a component , first letter it should be uppercase */}
      {/* icon => Icon or chang the prop name {icon:Icon} */}
      {/* <SidebarRow Icon={HomeIcon} title='Home' /> */}

      <SidebarRow selected icon={HomeIcon} title='Home' />
      <SidebarRow icon={WhatshotIcon} title='Trending' />
      <SidebarRow icon={SubscriptionIcon} title='Subscription' />

      <hr />

      <SidebarRow icon={VideoLibraryIcon} title='Library' />
      <SidebarRow icon={HistoryIcon} title='History' />
      <SidebarRow icon={OndemandVideoIcon} title='Your videos' />
      <SidebarRow icon={WatchLaterIcon} title='Watch Later' />
      <SidebarRow icon={ThumbUpAltIcon} title='Linked videos' />
      <SidebarRow icon={ExpandMoreOutlinedIcon} title='Show more' />
    </div>
  );
};

export default Sidebar;
