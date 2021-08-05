import {css} from '@emotion/react';
import styled from '@emotion/styled';

export const ListsRenameWrapper = styled.div(
  ({theme: {colors}}) => css`
    width: 280px;
    h3 {
      cursor: pointer;
      word-break: break-all;
      display: flex;
      justify-content: space-between;
      padding: 4px;
    }
    form {
      margin: 0 10px;
      div {
        margin: 0;
        padding: 0;
        line-height: 35px;
        input {
          height: 35px;
          border: 2px solid ${colors.brandColors.brand};
        }
      }
      section {
        button {
          margin-top: 10px;
          margin-right: 10px;
          padding: 0 5px;
        }
        i {
          float: right;
        }
      }
    }
  `
);
