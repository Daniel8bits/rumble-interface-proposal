import React from 'react';

interface AvatarProps {
  className?: string;
}

const Avatar: React.FC<AvatarProps> = (props) => {
  return (
    <img 
      src="/assets/tanjiro.jpg" 
      alt="profile" 
      className={`w-[40px] h-[40px] rounded-full ${props.className ?? ''}`}
    />
  );
};

export default Avatar;