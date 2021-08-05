import {css} from '@emotion/react';
import styled from '@emotion/styled';

export const CardDetailsWrapper = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0 20px;
  `
);
export const PopoverWrapper = styled.div(
  () => css`
    div {
      color: red;
      background: blue;
    }
  `
);

export const CardLeftWrapper = styled.section(
  () => css`
    flex-basis: 500px;
    margin-right: 30px;
  `
);

export const CardRightWrapper = styled.section(() => css``);
