import React from 'react';

interface SearchBarProps {
  
}

const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <div className="w-[30em] h-[40px] bg-gray2 border-search rounded-full flex items-center">
      <button type="button" className="appearance-none ml-4"> Videos </button>
      <input type="text" className="appearance-none bg-transparent outline-none ml-4 pl-4 border-l-2 border-l-[#aaa]" />
    </div>
  );
};

export default SearchBar;