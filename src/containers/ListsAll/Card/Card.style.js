import {css} from '@emotion/react';
import styled from '@emotion/styled';

export const CardWrapper = styled.div(
  () => css`
    margin: 10px;
  `
);

export const CardNameWrapper = styled.div(
  ({theme: {backgroundColors, borderRadius}}) => css`
    margin: 8px 0px;
    padding: 5px;
    background: ${backgroundColors[900]};
    border-radius: ${borderRadius.md};
    box-shadow: 0 1px 0 rgb(9 30 66 / 25%);
    i {
      display: none;
    }
    :hover {
      background: ${backgroundColors[700]};
      i {
        display: block;
      }
    }
    p {
      word-break: break-all;
      display: flex;
      justify-content: space-between;
      padding: 4px;
      cursor: pointer;
    }
  `
);
