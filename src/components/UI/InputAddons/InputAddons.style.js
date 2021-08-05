import {css} from '@emotion/react';
import styled from '@emotion/styled';

export const LabelWrapper = styled.label(
  ({theme: {colors, fontColors}}) => css`
    margin-bottom: 5px;
    display: block;
    color: ${fontColors[700]};
    > span {
      color: ${colors.brandColors.danger};
    }
  `
);

export const PrefixWrapper = styled.div(
  ({theme: {colors}}) => css`
    position: absolute;
    left: 20px;
    top: 0;
    line-height: inherit;
    text-align: center;
    pointer-events: none;
    color: ${colors.brandColors.brand2};
    * {
      color: inherit;
      line-height: inherit;
      margin: 0;
    }
  `
);

export const StatusWrapper = styled.div(
  ({error, theme: {colors}}) => css`
    display: none;
    position: absolute;
    right: 32px;
    top: 0;
    line-height: inherit;
    font-size: inherit;
    color: ${error ? colors.brandColors.danger : colors.brandColors.success};
    * {
      color: inherit;
      line-height: inherit;
      margin: 0;
    }
  `
);

export const ErrorWrapper = styled.div(
  ({theme: {colors}}) => css`
    margin-top: 5px;
    display: block;
    line-height: 1.1;
    position: absolute;
    right: 0;
    top: 100%;
    color: ${colors.brandColors.danger};
    font-size: 13px;
  `
);
