import React from 'react';

import TopMenu from '@components/topMenu/TopMenu'

interface MainLayoutProps {
}

const MainLayout: React.FC<MainLayoutProps> = (props) => {
  return (
    <div className="overflow-x-hidden">
      <TopMenu  />
      <main>
        {props.children}
      </main>
    </div>
  );
};

export default MainLayout;