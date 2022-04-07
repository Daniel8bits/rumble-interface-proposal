import React from 'react';
import {MdMenu} from 'react-icons/md'
import SearchBar from './SearchBar';

interface TopMenuProps {
  
}

const TopMenu: React.FC<TopMenuProps> = () => {
  return (
    <div className="bg-gray4 w-full h-[60px] flex items-center text-white">
      
      <div className="w-[80px] h-full text-[2.5em] flex justify-center items-center text-green1 cursor-pointer">
        <MdMenu  />
      </div>
      
      <div className="w-[10em] h-full flex justify-center items-center cursor-pointer">
        <img 
          src="/assets/rumble-full-logo.svg" 
          alt="logo" 
        />
      </div>
      <SearchBar  />
    </div>
  );
};

export default TopMenu;