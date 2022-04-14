import React from 'react';

import {
  MdHome,
  MdCategory,
  MdFavorite,
  MdSchedule
} from 'react-icons/md'

import {
  FaPenNib,
  FaCog
} from 'react-icons/fa'
import { IconType } from 'react-icons';

interface SideMenuItemProps {
  icon: IconType
}

const SideMenuItem: React.FC<SideMenuItemProps> = (props) => {
  const icon = React.createElement(props.icon, {
    className: "text-[25px] w-[80px] inline-block"
  })
  return (
    <li className="w-full">
      <a 
        href="/"
        className="py-4 w-full flex hover:bg-green2"
      >
        {icon}
        {props.children}
      </a>
    </li>
  )
}

interface SideMenuProps {
  open: boolean;
}

const SideMenu: React.FC<SideMenuProps> = (props) => {
  return (
    <div className={`${props.open ? 'w-[240px]' : 'w-[80px]'} sidemenu-height bg-gray4 overflow-hidden`}>
      <div className="w-[80px] text-center font-bold text-gray1 py-2">
        MENU
      </div>
      <ul className="w-[240px] text-white font-bold">
        <SideMenuItem icon={MdHome}> Home </SideMenuItem>
        <SideMenuItem icon={MdCategory}> Categories </SideMenuItem>
        <SideMenuItem icon={FaPenNib}> Inscriptions </SideMenuItem>
        <SideMenuItem icon={MdFavorite}> Favorites </SideMenuItem>
        <SideMenuItem icon={MdSchedule}> Watch Later </SideMenuItem>
        <SideMenuItem icon={FaCog}> Preferences </SideMenuItem>
      </ul>
    </div>
  );
};

export default SideMenu;