import React, { useState } from 'react';

import './Header.css';

import { Avatar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppIcon from '@material-ui/icons/Apps';
import NotificationIcon from '@material-ui/icons/Notifications';
import { IconButton } from '@material-ui/core';

import {
  useRouteMatch,
  useHistory,
  useParams,
  useLocation,
  Link,
} from 'react-router-dom';

const Header = () => {
  const match = useRouteMatch();
  const history = useHistory();
  const params = useParams();
  const location = useLocation();

  const [input, setInput] = useState('');

  const onSubmit = (e) => {
    console.log(params, match, history, location);

    history.push(`/search/${input}`);
  };

  return (
    <div className='header'>
      <div className='header__left'>
        <MenuIcon />
        <Link to='/'>
          <img
            className='header__logo'
            alt='logo de YouTube'
            src='//upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/langfr-280px-YouTube_Logo_2017.svg.png'
          />
        </Link>
      </div>

      <div className='header__input'>
        <input
          type='text'
          name='search'
          placeholder='Search'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Link
          to={`/search/${input}`}
          className='button'
          // disabled={!input}
          // onClick={onSubmit}
        >
          <SearchIcon className='header__searchButton' />
        </Link>
      </div>

      <div className='header__icons'>
        <VideoCallIcon className='header__icon' />
        <AppIcon className='header__icon' />
        <NotificationIcon className='header__icon' />
        <Avatar
          alt='Alexon'
          src='https://avatars3.githubusercontent.com/u/55364947?s=460&v=4'
        />
      </div>
    </div>
  );
};

export default Header;
