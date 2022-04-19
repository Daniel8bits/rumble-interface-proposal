import FlexLayout from '@layouts/FlexLayout';
import React from 'react';

interface HeaderProps {
  
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <h1 className="text-h1 font-bold py-4 text-white"> 
        What&apos;s Up? 
      </h1>
      <FlexLayout className="w-full bg-green1">
        <FlexLayout 
          className="w-[744px] h-[390px] bg-green2"
        >

        </FlexLayout>
        <FlexLayout className="grow" wrap>
          <FlexLayout className="w-full h-[130px] bg-red-400">
            
          </FlexLayout>
          <FlexLayout className="w-full h-[130px] bg-blue-400">

          </FlexLayout>
          <FlexLayout className="w-full h-[130px] bg-yellow-400">

          </FlexLayout>
        </FlexLayout>
      </FlexLayout>
    </header>
  );
};

export default Header;