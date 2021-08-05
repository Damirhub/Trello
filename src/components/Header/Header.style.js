import {css} from '@emotion/react';
import styled from '@emotion/styled';

export const HeaderWrapper = styled.header(
  ({theme: { colors}, isHome}) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 3px;
    height: 40px;
    background-color: ${isHome ? colors.brandColors.brand : 'rgba(0,0,0,0.32)' };
    button {
      font-size: 14px;
      display: flex;
      align-items: center;
    }
  `
);

export const LeftWrapper = styled.section(
  ({theme: {mq}}) => css`
    display: flex;
    flex-basis: 100%;
    justify-content: flex-start;
    >button {
      :nth-of-type(2) {
        ${mq('medium')} {
          display: none;
        }
    }
  }
  `
);

export const RightWrapper = styled.section(
  ({theme: {mq}}) => css`
    display: flex;
    flex-basis: 100%;
    justify-content: flex-end;
    >button {
      :nth-of-type(2) {
        ${mq('medium')} {
          display: none;
        }
    }
  }
  `
);

export const AuthWrapper = styled.div(
  ({theme: {colors, fontWeights, mq}}) => css`
    a {
      font-size: 14px;
      line-height: 17px;
      font-weight: ${fontWeights.semiBold};
      color: ${colors.brandColors.brand};
      margin-left: 10px;
      text-decoration: none;
    }
    ${mq('medium')} {
      span {
        display: none;
      }
    }
  `
);
