import Header from '@components/header/Header';
import Recommended from '@components/recommended/Recommended';
import MainLayout from '@layouts/MainLayout';
import React from 'react';

interface HomeProps {
  
}

const Home: React.FC<HomeProps> = () => {
  return (
    <MainLayout>
      <Header  />
      <Recommended  />
    </MainLayout>
  );
};

/*

<StyledButton className="text-white bg-gray4 w-32 h-32 ml-2">
  button 1
</StyledButton>

*/

export default Home;