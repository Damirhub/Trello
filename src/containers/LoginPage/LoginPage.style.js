import {css} from '@emotion/react';
import styled from '@emotion/styled';

export const LoginPageWrapper = styled.div(
  ({theme: {colors}}) => css`
    max-width: 800px;
    width: 100%;
    margin: auto;
    h2 {
      font-size: 18px;
    }
    p {
      line-height: 1.5;
      font-size: 16px;
    }
    a {
      color: ${colors.brandColors.danger};
    }
  `
);
