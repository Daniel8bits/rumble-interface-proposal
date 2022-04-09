import React from 'react';
import FlexLayout from '@layouts/FlexLayout';
import {
  MdMenu
} from 'react-icons/md'

interface LeftSideProps {
  openSideMenu: (value: boolean | ((oldValue: boolean) => boolean)) => void;
}

const LeftSide: React.FC<LeftSideProps> = (props) => {
  return (
    <FlexLayout alignH="justify-start" className="w-1/4">
      <FlexLayout className="w-[80px] h-full text-green1 cursor-pointer">
        <MdMenu className="text-[2.5em]" onClick={() => props.openSideMenu(value => !value)}  />
      </FlexLayout>
      
      <FlexLayout className="w-[10em] h-full cursor-pointer">
        <img 
          src="/assets/rumble-full-logo.svg" 
          alt="logo" 
        />
      </FlexLayout>
    </FlexLayout>
  );
};

export default LeftSide;