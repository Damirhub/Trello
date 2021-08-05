import {css} from '@emotion/react';
import styled from '@emotion/styled';

export const BoardWrapper = styled.section(
  ({bgColor, bgImage}) => css`
    background-color: ${bgColor};
    background-image: url(${bgImage});
    background-size: cover;
    height: 100vh;
    background-position: center;
  `
);
