import React from 'react';
import PropTypes from 'prop-types';

import {IconWrapper} from './Icon.style';

import {ReactComponent as AppsIco} from '../../../images/icons/apps-ico.svg';
import {ReactComponent as BellIco} from '../../../images/icons/bell-ico.svg';
import {ReactComponent as HomeIco} from '../../../images/icons/home-ico.svg';
import {ReactComponent as InfoIco} from '../../../images/icons/info-ico.svg';
import {ReactComponent as BoardIco} from '../../../images/icons/board-ico.svg';
import {ReactComponent as MagnifierIco} from '../../../images/icons/magnifier-ico.svg';
import {ReactComponent as PlusIco} from '../../../images/icons/plus-ico.svg';
import {ReactComponent as CloseIco} from '../../../images/icons/close-ico.svg';
import {ReactComponent as ViewIco} from '../../../images/icons/view-ico.svg';
import {ReactComponent as PenIco} from '../../../images/icons/pen-ico.svg';

const Icon = (props) => {
  const {
    ico,
    active,
    inline,
    block,
    inlineBlock,
    padding,
    width,
    height,
    hoverable,
    shadeColor,
    shadeHover,
    ...rest
  } = props;

  return (
    <IconWrapper
      active={active}
      inline={inline}
      block={block}
      inlineBlock={inlineBlock}
      padding={padding}
      hoverable={hoverable}
      shadeColor={shadeColor}
      shadeHover={shadeHover}
      {...rest}
    >
      {(() => {
        switch (ico) {
          case 'apps':
            return <AppsIco width={width} height={height} />;
          case 'bell':
            return <BellIco width={width} height={height} />;
          case 'home':
            return <HomeIco width={width} height={height} />;
          case 'board':
            return <BoardIco width={width} height={height} />;
          case 'info':
            return <InfoIco width={width} height={height} />;
          case 'magnifier':
            return <MagnifierIco width={width} height={height} />;
          case 'plus':
            return <PlusIco width={width} height={height} />;
          case 'close':
            return <CloseIco width={width} height={height} />;
          case 'view':
            return <ViewIco width={width} height={height} />;
          case 'pen':
            return <PenIco width={width} height={height} />;
          default:
            return null;
        }
      })()}
    </IconWrapper>
  );
};

Icon.propTypes = {
  ico: PropTypes.string,
  active: PropTypes.bool,
  inline: PropTypes.bool,
  block: PropTypes.bool,
  inlineBlock: PropTypes.bool,
  padding: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  hoverable: PropTypes.bool,
  shadeColor: PropTypes.oneOf([70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900]),
  shadeHover: PropTypes.oneOf([70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900]),
};

Icon.defaultProps = {
  hoverable: true,
  shadeColor: 700,
  shadeHover: 800,
};

export default Icon;
