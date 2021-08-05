import React from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { authLogout } from '../../store/reducers/authReducer';
import {Box} from '../UI/Box/Box';
import {Button} from '../UI/Button/Button';
import Icon from '../UI/Icon/Icon';

import Logo from '../UI/Logo/Logo';

import {HeaderWrapper, LeftWrapper, RightWrapper} from './Header.style';

const Header = () => {

const history = useHistory()
const dispatch = useDispatch();

  return (
    <HeaderWrapper isHome = {history.location.pathname === '/home'}>
      <LeftWrapper>
        <Button variant="second" margin="0 2px">
          <Icon ico="apps" width="20px" />
        </Button>
          <Button variant="second" margin="0 2px">
            <Icon ico="home" width="20px" />
          </Button>
        <Button variant="second" margin="0 2px">
          <Icon ico="board" width="20px" inlineBlock flex padding="2px 0 0" />{' '}
          <Box m="6px">Boards</Box>
        </Button>
      </LeftWrapper>
      <Logo link="/" width="80px" />

      <RightWrapper>
        <Button variant="second" margin="0 2px">
          <Icon ico="plus" width="20px" />
        </Button>
        <Button variant="second" margin="0 2px">
          <Icon ico="info" width="20px" />
        </Button>
        <Button variant="second" margin="0 2px">
          <Icon ico="bell" width="20px" inlineBlock flex padding="3px 0 0" />
        </Button>
         <Button variant="fourth" margin="0 2px" onClick={() => dispatch(authLogout())}>Logout</Button>
      </RightWrapper>

    </HeaderWrapper>
  );
};

export default Header;
