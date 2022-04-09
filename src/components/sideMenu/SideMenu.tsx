import React from 'react';

interface SideMenuProps {
  open: boolean;
}

const SideMenu: React.FC<SideMenuProps> = (props) => {
  return (
    <div className={`${props.open ? 'w-[240px]' : 'w-[80px]'} sidemenu-height bg-gray4`}>
      menu
    </div>
  );
};

export default SideMenu;