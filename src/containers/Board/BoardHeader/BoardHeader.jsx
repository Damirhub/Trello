import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {Box} from '../../../components/UI/Box/Box';
import {Button} from '../../../components/UI/Button/Button';
import Icon from '../../../components/UI/Icon/Icon';
import {IconFont} from '../../../components/UI/IconFont/IconFont';
import {selectUser} from '../../../store/reducers/userReducer';

import {BoardHeaderWrapper, LeftWrapper, RightWrapper, VerticalDivider, InitialsWrapper} from './BoardHeader.style';

const BoardHeader = ({name, isLight, permissionLevel}) => {
  let user = useSelector(selectUser);

  let permission;

  (() => {
    switch (permissionLevel) {
      case 'org':
        return (permission = 'Workspace visible');
      case 'private':
        return (permission = 'Private');
      case 'public':
        return (permission = 'Public');
      default:
        return;
    }
  })();

  return (
    <Box m="3px">
      <BoardHeaderWrapper>
        <LeftWrapper>
          <Button variant={isLight ? 'third' : 'second'} regular inline margin="0 2px">
            <Icon hoverable = {false} ico="view" width="20px" shadeColor={isLight ? 70 : 100} />
            <Box inline m="6px">
              Board
            </Box>
          </Button>

          <Button variant={isLight ? 'third' : 'second'} inline isGhost margin="0 2px">
            {name}
          </Button>

          <Link to="/">
            <Button variant={isLight ? 'third' : 'second'} inline margin="0 2px">
              <IconFont fontFamily="glyphicons" icon="star-empty" />
            </Button>
          </Link>

          <VerticalDivider />

          <Link to="/">
            <Button variant={isLight ? 'third' : 'second'} regular margin="0 2px">
              {user.username}
            </Button>
          </Link>

          <VerticalDivider />

          <Link to="/">
            <Button variant={isLight ? 'third' : 'second'} regular margin="0 2px">
              <IconFont fontFamily="glyphicons" icon="parents" />
              <Box m="0 6px" inline />
              {permission}
            </Button>
          </Link>

          <VerticalDivider />

          <InitialsWrapper>
            <Button variant="fourth" margin="0 2px" width="32px" isRound>
              <h3>DP</h3>
            </Button>
          </InitialsWrapper>

          <Link to="/">
            <Button variant={isLight ? 'third' : 'second'} regular margin="0 8px">
              Invite
            </Button>
          </Link>

          <RightWrapper>
            <Button variant={isLight ? 'third' : 'second'} regular margin="0 2px">
              <IconFont fontFamily="glyphicons" icon="plate-of-food" />
              <Box m="0 2px" inline /> Buttler
            </Button>
            <Button variant={isLight ? 'third' : 'second'} regular margin="0 2px">
              <IconFont fontFamily="glyphicons" icon="more" />
              <Box inline m="3px" />
              Show menu
            </Button>
          </RightWrapper>
        </LeftWrapper>
      </BoardHeaderWrapper>
    </Box>
  );
};

export default BoardHeader;
