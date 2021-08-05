/************************************************************************************
*************************************************************************************
Component Name: IconFont

Description:    Icon component rendering glyphicons icon by receiving glyphicon class name as prop.

Recieving Props: 
 - icon: 
    default: null
    description:    Last part / Name of glyphicon class
 - fontFamily:
    default: null
    description:    css class declared inside css folder/file for each font (Prefix of each class)
 - rotate:
    default: null
    description:    css prop transform: rotate(X deg)

Note: Don't forget to import glyphicons fonts and css on main index.html

Usage Example:
<IconFont fontFamily="glyphicons" icon="remove"/>

*************************************************************************************
************************************************************************************/
import React from 'react';
import PropTypes from 'prop-types';
import { IconFontWrapper } from './IconFont.style';

export const IconFont = props => {
  const { className, onClick, icon, fontFamily, rotate } = props;

  return (
    <IconFontWrapper
      rotate={rotate}
      className={`${
        className ? className : ''
      } ${fontFamily} ${fontFamily}-${icon}`}
      aria-hidden="true"
      onClick={onClick}
    />
  );
};

IconFont.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.string,
  fontFamily: PropTypes.string
};
