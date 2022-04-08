import React from 'react';

interface FlexLayoutProps {
  alignH?: string;
  alignV?: string;
  className?: string;
}

const FlexLayout: React.FC<FlexLayoutProps> = (props) => {
  return (
    <div className={`
      flex 
      ${props.alignH ?? 'justify-center'} 
      ${props.alignV ?? 'items-center'} 
      ${props.className ?? ''}
    `}>
      {props.children}
    </div>
  );
};

export default FlexLayout;