import FlexLayout from '@layouts/FlexLayout';
import React from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import SearchBar from './SearchBar';

interface TopMenuProps {
  openSideMenu: (value: boolean | ((oldValue: boolean) => boolean)) => void;
}

const TopMenu: React.FC<TopMenuProps> = (props) => {
  return (
    <FlexLayout 
      alignH='justify-between'
      className="bg-gray4 w-full h-[60px] text-white"
    >
      <LeftSide openSideMenu={props.openSideMenu}  />
      <SearchBar  />
      <RightSide  />
    </FlexLayout>
  );
};

export default TopMenu;