import MainLayout from '@layouts/MainLayout';
import React from 'react';

interface HomeProps {
  
}

const Home: React.FC<HomeProps> = () => {
  return (
    <MainLayout>
      Hello World !!! But now with a layout
    </MainLayout>
  );
};

export default Home;