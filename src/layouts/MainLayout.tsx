import React, { useState } from 'react';

import TopMenu from '@components/topMenu/TopMenu'
import SideMenu from '@components/sideMenu/SideMenu';
import FlexLayout from '@layouts/FlexLayout';
import SimpleBar from 'simplebar-react';

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
        <div className="grow content-container-height overflow-hidden mt-2">
          <SimpleBar style={{ 
            width: "100%",
            maxHeight: 'calc(100vh - 68px)' 
          }}>
            <main className="w-full flex justify-center">
              {props.children}
            </main>
          </SimpleBar>
        </div>
      </FlexLayout>
    </div>
  );
};

export default MainLayout;