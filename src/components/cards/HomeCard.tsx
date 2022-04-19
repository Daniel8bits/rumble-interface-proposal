import Avatar from '@components/avatar/Avatar';
import FlexLayout from '@layouts/FlexLayout';
import React from 'react';

interface HomeCardProps {
  title: string
  thumbnail: string
  avatar: string
  rumbler: string
  intervalSinceWasPosted: number
  views: number
  className: string
}

const HomeCard: React.FC<HomeCardProps> = (props) => {
  return (
    <FlexLayout alignV="justify-start" column className={`${props.className}`}>
      <img 
        src={props.thumbnail} 
        alt={props.title} 
        className="w-[275px] h-[158px]"
      />
      <h3 className="text-white text-lg font-bold py-1"> 
        {props.title} 
      </h3>
      <FlexLayout alignH="justify-start">
        <Avatar  
          src={props.avatar}
          alt={props.rumbler}
          className="mr-2"
        />
        <FlexLayout wrap>
          <a href={`/${props.rumbler}`} className="w-full"> {props.rumbler} </a>
          <small className="w-full"> {props.intervalSinceWasPosted} </small>
        </FlexLayout>
      </FlexLayout>
      <small className="py-1"> {props.views} </small>
    </FlexLayout>
  );
};

export default HomeCard;