import React from 'react';
import Icon from '../../../components/UI/Icon/Icon';
import {IconFont} from '../../../components/UI/IconFont/IconFont';
import {NavigationWrapper} from './Navigation.style';

const Navigation = () => {
  return (
    <NavigationWrapper>
      <ul>
        <li>
          <IconFont fontFamily="glyphicons" icon="check" />
          <p>Boards</p>
        </li>
        <li>
          <IconFont fontFamily="glyphicons" icon="more-windows" />
          <p>Templates</p>
        </li>
        <li>
          <IconFont fontFamily="glyphicons" icon="voice" />
          <p>Home</p>
        </li>
      </ul>

      <h5>
        WORKSPACES
        <Icon ico="plus" width="16px" />
      </h5>
    </NavigationWrapper>
  );
};

export default Navigation;
