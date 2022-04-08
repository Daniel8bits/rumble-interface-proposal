import React from 'react';
import FlexLayout from '@layouts/FlexLayout';
import {
  MdMenu
} from 'react-icons/md'

interface LeftSideProps {
  
}

const LeftSide: React.FC<LeftSideProps> = () => {
  return (
    <FlexLayout alignH="justify-start" className="w-1/4">
      <FlexLayout className="w-[80px] h-full text-green1 cursor-pointer">
        <MdMenu className="text-[2.5em]"  />
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