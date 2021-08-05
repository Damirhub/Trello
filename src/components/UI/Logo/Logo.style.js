import {css} from '@emotion/react';
import styled from '@emotion/styled';

export const LogoContainer = styled.img(
  ({invert, width}) => css`
    width: ${width};
    display: block;
    filter: ${invert ? 'brightness(0) invert(1)' : 'none'};
  `
);

export const LogoWrapper = styled.div(css`
  /* display: inline-block; 
  was used for image logo, switched to inline-flex for text logo verical alignment*/
  display: inline-flex;
  margin: auto;
  vertical-align: middle;
  user-select: none;
  opacity: .5;
  :hover {
    opacity: 1;
  }
`);
