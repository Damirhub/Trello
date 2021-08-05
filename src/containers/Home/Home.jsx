import React from 'react';
import {HomeWrapper} from './Home.style';
import Navigation from './Navigation/Navigation';
import BoardsList from './BoardsList/BoardsList';
import Header from '../../components/Header/Header';

const Home = () => {
  return (
    <>
      <Header />
      <HomeWrapper>
        <Navigation />
        <BoardsList />
      </HomeWrapper>
    </>
  );
};

export default Home;
