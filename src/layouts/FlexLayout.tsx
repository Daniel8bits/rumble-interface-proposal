import React from 'react';

interface FlexLayoutProps {
  alignH?: string;
  alignV?: string;
  wrap?: boolean;
  column?: boolean;
  className?: string;
}

const FlexLayout: React.FC<FlexLayoutProps> = (props) => {
  return (
    <div className={`
      flex 
      ${props.wrap && 'flex-wrap'} 
      ${props.alignH ?? 'justify-center'} 
      ${props.alignV ?? 'items-center'} 
      ${props.column && 'flex-col'} 
      ${props.className ?? ''}
    `}>
      {props.children}
    </div>
  );
};

export default FlexLayout;