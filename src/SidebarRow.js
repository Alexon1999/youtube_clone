import React from 'react';

import './SidebarRow.css';

//* icon is a component , first letter it should be uppercase
// if not react doesn't know if it's a component
const SidebarRow = ({ selected, title, icon: Icon }) => {
  return (
    <div className={`sidebarRow ${selected && 'selected'}`}>
      <Icon className='sidebarRow__icon' />
      <h2 className='sidebarRow__title'>{title}</h2>
    </div>
  );
};

export default SidebarRow;
