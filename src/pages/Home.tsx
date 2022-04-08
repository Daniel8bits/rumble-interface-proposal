import StyledButton from '@components/button/StyledButton';
import MainLayout from '@layouts/MainLayout';
import React from 'react';

interface HomeProps {
  
}

const Home: React.FC<HomeProps> = () => {
  return (
    <MainLayout>
      Hello World !!! But now with a layout
      <br  />
      <StyledButton className="text-white bg-gray4 w-32 h-32 ml-2">
        button 1
      </StyledButton>
      <StyledButton className="text-white bg-gray4 w-32 h-32 ml-2">
        button 2
      </StyledButton>
      <StyledButton className="text-white bg-gray4 w-32 h-32 ml-2">
        button 3
      </StyledButton>
      <StyledButton className="text-white bg-gray4 w-32 h-32 ml-2">
        button 4
      </StyledButton>
    </MainLayout>
  );
};

export default Home;