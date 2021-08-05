import {css} from '@emotion/react';
import styled from '@emotion/styled';

export const ListsAllWrapper = styled.div(
  ({theme: {fontColors}, bgColor}) => css`
    background: ${bgColor};
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    color: ${fontColors[70]};
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    height: calc(100% - 95px);
    position: relative;
    right: 0;
    bottom: 0;
    left: 0;
    padding-bottom: 8px;
    h3 {
      font-size: 14px;
    }
  `
);

export const ListContainer = styled.div(
  ({theme: {colors, backgroundColors, borderRadius}}) => css`
    width: 280px;
    background: ${backgroundColors[600]};
    margin-left: 10px;
    border-radius: ${borderRadius.md};
    box-shadow: 0 1px 0 rgb(9 30 66 / 25%);
    > form {
      margin: 10px 10px;
      div {
        margin: 0;
        padding: 0;
        line-height: 35px;
        font-size: 14px;
        input {
          height: 35px !important;
          border: 2px solid ${colors.brandColors.brand};
        }
      }
    }
  `
);
