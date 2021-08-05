import React from 'react';
import PropTypes from 'prop-types';
import {ButtonWrapper} from './Button.style';

export const Button = React.forwardRef((props, ref) => {
  const {
    children,
    type,
    disabled,
    onClick,
    height,
    width,
    className,
    center,
    variant,
    isGhost,
    margin,
    isRound,
    regular,
    textLeft,
  } = props;

  return (
    <ButtonWrapper
      disabled={disabled}
      type={type}
      onClick={onClick}
      height={height}
      width={width}
      className={className}
      center={center}
      variant={variant}
      isGhost={isGhost}
      ref={ref}
      margin={margin}
      isRound={isRound}
      regular={regular}
      textLeft={textLeft}
    >
      {children}
    </ButtonWrapper>
  );
});

ButtonWrapper.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  margin: PropTypes.string,
  textLeft: PropTypes.bool,
  disabled: PropTypes.bool,
  center: PropTypes.bool,
  isRound: PropTypes.bool,
  regular: PropTypes.bool,
  variant: PropTypes.oneOf(['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'danger']),
  isGhost: PropTypes.bool,
};

ButtonWrapper.defaultProps = {
  height: '32px',
  variant: 'first',
};
