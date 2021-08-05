import {css} from '@emotion/react';
import styled from '@emotion/styled';

export const BoardHeaderWrapper = styled.header(
  () => css`
    box-sizing: border-box;
    padding: 3px;
    height: auto;
    position: relative;
    button {
      display: inline-block;
    }
    i {
      display: inline-block;
    }
  `
);

export const VerticalDivider = styled.div(
  () => css`
    border-left: 1px solid #ffffff3d;
    border-color: #0003;
    height: 16px;
    margin: 8px 8px 12px 8px;
    display: inline-block;
  `
);

export const LeftWrapper = styled.div(
  () => css`
    display: flex;
    flex-wrap: wrap;
    > button:nth-of-type(2) {
      font-size: 18px;
      font-weight: 700;
    }
    i {
      vertical-align: middle;
    }
  `
);

export const InitialsWrapper = styled.div(
  () => css`
    > button {
      padding: 0;
      font-size: 14px;
      font-weight: 700;
    }

    h3 {
      font-family: monospace;
    }
  `
);

export const RightWrapper = styled.div(
  () => css`
    margin-left: auto;
  `
);
