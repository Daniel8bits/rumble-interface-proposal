import React from 'react';
import Avatar from '@components/avatar/Avatar';
import StyledButton from '@components/button/StyledButton';
import FlexLayout from '@layouts/FlexLayout';
import {
  MdNotifications,
  MdVideoCall,
  MdPaid
} from 'react-icons/md'

interface RightSideProps {
  
}

const RightSide: React.FC<RightSideProps> = () => {
  return (
    <FlexLayout alignH="justify-end " className="w-1/4">
      <FlexLayout className="topmenu-rightside-bg-color">
        <StyledButton className="bg-black w-[70px] h-[60px] mr-[1px] group hover:bg-white">
          <MdPaid className='text-green1 group-hover:text-gray2 m-2'  />
        </StyledButton>
        <StyledButton className="bg-black w-[70px] h-[60px] mr-[1px] group hover:bg-white">
          <MdVideoCall className='text-green1 group-hover:text-gray2 m-2'  />
        </StyledButton>
        <StyledButton className="bg-black w-[70px] h-[60px] mr-[1px] group hover:bg-white">
          <MdNotifications className='text-green1 group-hover:text-gray2 m-2'  />
        </StyledButton>
        <StyledButton className="bg-black w-[70px] h-[60px] group hover:bg-white">
          <Avatar 
            src="/assets/tanjiro.jpg"
            alt="profile"
            className='m-2 border-2 border-transparent group-hover:border-gray2 box-content'  
          />
        </StyledButton>
      </FlexLayout>
    </FlexLayout>
  );
};

export default RightSide;