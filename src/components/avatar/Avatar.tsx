import React, { useMemo } from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  size?: string;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = (props) => {

  const size = useMemo<string>(() => {
    switch (props.size) {
      case "small":
        return ""
      case "medium":
        return "w-[40px] h-[40px]"
      case "large":
        return ""
      default:
    }
    return "w-[40px] h-[40px]"
  }, [props.size])

  return (
    <img 
      src={props.src} 
      alt={props.alt}
      className={`${size} rounded-full ${props.className ?? ''}`}
    />
  );
};
/*
<img 
  src="/assets/tanjiro.jpg" 
  alt="profile" 
  className={`w-[40px] h-[40px] rounded-full ${props.className ?? ''}`}
/>
*/
export default Avatar;