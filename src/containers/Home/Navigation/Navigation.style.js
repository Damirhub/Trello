import {css} from '@emotion/react';
import styled from '@emotion/styled';

export const NavigationWrapper = styled.nav(
  ({theme: {mq, fontColors, backgroundColors}}) => css`
    width: 240px;
    margin: 40px 15px 0;
    color: ${fontColors[70]};
    padding: 10px;
    ${mq('medSmall')} {
      display: none;
    }
    > ul > li {
      padding: 10px 8px;

      > p {
        color: ${fontColors[70]};
        display: unset;
        padding: 5px;
        font-weight: 700;
      }
    }
    li:hover {
      opacity: 0.8;
      background-color: ${backgroundColors[600]};
      border-radius: 3px;
    }
    h5 {
      padding-left: 8px;
      color: ${fontColors[600]};
      display: flex;
      justify-content: space-between;
      padding: 10px 0 10px 8px;
      font-size: 14px;
    }
  `
);
