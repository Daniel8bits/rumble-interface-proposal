import React from 'react';
import Avatar from '@components/avatar/Avatar';
import StyledButton from '@components/button/StyledButton';
import FlexLayout from '@layouts/FlexLayout';
import {
  MdNotifications,
  MdVideoCall
} from 'react-icons/md'

interface RightSideProps {
  
}

const RightSide: React.FC<RightSideProps> = () => {
  return (
    <FlexLayout alignH="justify-end " className="w-1/4">
      <StyledButton className="bg-black w-[70px] h-[60px] group hover:bg-white">
        <MdVideoCall className='text-green1 m-2'  />
      </StyledButton>
      <StyledButton className="bg-black w-[70px] h-[60px] group hover:bg-white">
        <MdNotifications className='text-green1 m-2'  />
      </StyledButton>
      <StyledButton className="bg-black w-[70px] pr-4 h-[60px] group hover:bg-white">
        <Avatar className='m-2'  />
      </StyledButton>
    </FlexLayout>
  );
};

export default RightSide;