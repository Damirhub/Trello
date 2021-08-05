import {css} from '@emotion/react';
import styled from '@emotion/styled';

export const ButtonWrapper = styled.button(
  ({
    variant,
    center,
    width,
    isGhost,
    height,
    margin,
    isRound,
    regular,
    textAlign,
    textLeft, 
    theme: {colors, buttonRadius, fontSizes, fontWeights},
  }) => css`
    cursor: pointer;
    white-space: nowrap;
    text-decoration: none;
    border: 1px solid transparent;
    transition: all 0.1s ease;
    display: ${center ? 'block' : 'inline-block'};
    margin: ${center ? '0 auto' : '0'};
    font-size: ${fontSizes.sm};
    font-weight: ${regular ? fontWeights.regular : fontWeights.semiBold};
    border-radius: ${isRound ? '50%' : buttonRadius.md};
    padding: 0 10px;
    width: ${width};
    height: ${height};
    margin: ${margin};
    text-align: ${textLeft && 'left'};
    background: ${isGhost ? 'transparent' : colors[variant].color};
    /* border: ${isGhost ? `1px solid ${colors[variant].color}` : 'none'}; */
    color: ${colors[variant].text};

    &:hover {
      /* background: ${isGhost ? 'transparent' : colors[variant].color}; */
      background:  ${colors[variant].hover ? colors[variant].hover : 'rgba(0,0,0,0.1)'};
    }
    &:disabled {
      cursor: not-allowed;
      background: ${isGhost ? 'transparent' : colors[variant].color};
    }
    &:focus {
      outline: none;
    }
  `
);
