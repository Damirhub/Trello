import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const IconFontWrapper = styled.i(({ 
  rotate
}) => css`
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  transform: ${rotate ? `rotate(${rotate}deg)` : 'none'};
  &:before {
    display: block;
  }
`)
