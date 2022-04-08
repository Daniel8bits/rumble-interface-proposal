import React from 'react';

interface StyledButtonProps {
  className?: string;
  onClick?: (event: React.MouseEvent) => void
}

const StyledButton: React.FC<StyledButtonProps> = (props) => {
  return (
    <button 
      type="button" 
      onClick={props.onClick}
      className={`button-skew ${props.className}`}
    >
      <div className="button-skew-inner flex justify-center items-center">
        {props.children}
      </div>
    </button>
  );
};

export default StyledButton;