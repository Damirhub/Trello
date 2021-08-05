/************************************************************************************
*************************************************************************************
Component Name: Box

Description:    Box component wrapper for adding margins and paddings.

Recieving Props: 
 - p:
    default: null
    description:    padding css prop
 - m:
    default: null
    description:    margin css prop

Usage Example:
<Box m="0 0 5px 0" p="10px"/>

*************************************************************************************
************************************************************************************/
import React from 'react';
import PropTypes from 'prop-types';
import { BoxWrapper } from './Box.style';

export const Box = props => {
  const { 
    children, 
    className, 
    onClick, 
    m, 
    p, 
    textAlign, 
    pointer, 
    inline, 
    bg, 
    border, 
    borderColor, 
  } = props;

  return (
    <BoxWrapper
      m={m}
      p={p}
      textAlign={textAlign}
      className={className}
      onClick={onClick}
      pointer={pointer}
      inline={inline}
      bg={bg}
      border={border}
      borderColor={borderColor}
    >
      {children}
    </BoxWrapper>
  );
};

Box.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  m: PropTypes.string,
  p: PropTypes.string,
  textAlign: PropTypes.string,
  pointer: PropTypes.bool,
  inline: PropTypes.bool,
  bg: PropTypes.number,
  border: PropTypes.string,
  borderColor: PropTypes.number,
};
