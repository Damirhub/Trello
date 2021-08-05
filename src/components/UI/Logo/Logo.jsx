/************************************************************************************
*************************************************************************************
Component Name: Logo

Sub components: 

Description:    Logo component that creates div tag with background logo image taken from skin folder.
            
Usage Example:
<Logo />
*************************************************************************************
************************************************************************************/
import React from 'react';
import PropTypes from 'prop-types';

import {LogoWrapper, LogoContainer} from './Logo.style';

import LogoImg from '../../../images/logo-spirit.gif';
import {Link} from 'react-router-dom';

const Logo = ({className, onClick, invert, width, link}) => {
  return (
    <LogoWrapper>
      <Link to={link}>
        <LogoContainer
          className={className}
          onClick={onClick}
          invert={invert}
          width={width}
          src={LogoImg}
          alt="company logo"
        />
      </Link>
    </LogoWrapper>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  invert: PropTypes.bool,
  width: PropTypes.string,
};

Logo.defaultProps = {
  width: '180px',
};

export default Logo;
