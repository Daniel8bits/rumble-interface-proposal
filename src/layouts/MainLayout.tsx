import React, { useState } from 'react';

import TopMenu from '@components/topMenu/TopMenu'
import SideMenu from '@components/sideMenu/SideMenu';
import FlexLayout from '@layouts/FlexLayout';

interface MainLayoutProps {
}

const MainLayout: React.FC<MainLayoutProps> = (props) => {
  const [openSideMenu, setOpenSideMenu] = useState<boolean>(false);
  return (
    <div className="overflow-x-hidden">
      <div className="w-full border-b-8 topmenu-border-color">
        <TopMenu openSideMenu={setOpenSideMenu}  />
      </div>
      <FlexLayout 
        alignH="justify-start" 
        alignV="items-start"
        className="content-margin-fix"
      >
        <SideMenu open={openSideMenu}  />
        <main className="grow">
          {props.children}
        </main>
      </FlexLayout>
    </div>
  );
};

export default MainLayout;