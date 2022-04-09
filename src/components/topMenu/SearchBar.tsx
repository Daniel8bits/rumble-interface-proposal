import React from 'react';
import FlexLayout from '@layouts/FlexLayout';
import {
  MdMic,
  MdArrowDropDown,
  MdSearch
} from 'react-icons/md'

interface SearchBarProps {
  
}

const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <FlexLayout 
      alignH="justify-start"
      className="w-auto h-[60px] text-green1"
    >
      <FlexLayout 
        alignH="justify-start"
        className="w-[30em] h-[40px] bg-gray2 border-search rounded-full"
      >
        <button 
          type="button" 
          className="appearance-none pl-4 pr-2 h-full flex justify-center items-center text-sm"
        > 
          Videos 
          <MdArrowDropDown className="ml-2"  />
        </button>
        <input 
          type="text" 
          className="appearance-none bg-transparent outline-none px-4 border-l-2 border-l-[#aaa] text-white grow" 
        />
        <button type="button" className="py-2 px-4 hover:bg-green1 hover:text-gray2 rounded-full">
          <MdSearch  />
        </button>
      </FlexLayout>
      <button 
        type="button" 
        className="appearance-none w-[40px] h-[40px] bg-gray2 hover:bg-green1 hover:text-gray2 border-2 border-gray6 rounded-full ml-2 flex justify-center items-center"
      > 
        <MdMic  />
      </button>
    </FlexLayout>
  );
};

export default SearchBar;