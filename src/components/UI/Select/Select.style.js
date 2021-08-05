import {css} from '@emotion/react';
import styled from '@emotion/styled';

export const SelectWrapper = styled.div(
  ({
    hasPrefix,
    touched,
    error,
    label,
    value,
    mb,
    
    theme: {colors, fontColors, fontSizes, backgroundColors, borderRadius},
  }) => css`
    text-align: left;
    box-sizing: border-box;
    display: inline-block;
    width: 100%;
    margin-bottom: ${mb ? mb : '10px'};
    color: ${fontColors[800]};
    background: transparent;
    > div {
      position: relative;
      height: 52px;
      line-height: 52px;
      font-size: ${fontSizes.md};
    }
    select {
      width: 100%;
      box-sizing: border-box;
      height: 52px;
      font-size: inherit;
      line-height: 20px;
      border: 1px solid;
      color: ${!value ? fontColors[800] : fontColors[800]};
      font-style: normal;
      background: ${backgroundColors[800]};
      border-radius: ${borderRadius.md};
      padding-left: ${hasPrefix ? '64px' : '16px'};
      padding-right: 35px;
      padding-top: ${label ? '22px' : 0};
      padding-bottom: ${label ? '8px' : 0};

      cursor: pointer;
      border-color: ${touched && error
        ? colors.brandColors.danger
        : fontColors[500]};
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      option: {
        color: ${fontColors[800]};
        background: ${backgroundColors[800]};
        font-style: normal;
      }
    }
    select:-webkit-autofill {
      border: 1px solid;
      border-color: ${touched && error
        ? colors.brandColors.danger
        : fontColors[500]};
      -webkit-text-fill-color: ${fontColors[800]};
      -webkit-box-shadow: 0 0 0px 1000px transparent inset;
      transition: background-color 5000s ease-in-out 0s;
    }
    select:-webkit-autofill::hover {
      border: 1px solid;
      border-color: ${touched
        ? error
          ? colors.brandColors.danger
          : colors.brandColors.success
        : fontColors[500]};
      -webkit-text-fill-color: ${fontColors[800]};
      -webkit-box-shadow: 0 0 0px 1000px transparent inset;
      transition: background-color 5000s ease-in-out 0s;
    }
    select:-webkit-autofill::focus {
      border: 1px solid;
      border-color: ${touched
        ? error
          ? colors.brandColors.danger
          : colors.brandColors.success
        : fontColors[500]};
      -webkit-text-fill-color: ${fontColors[800]};
      -webkit-box-shadow: 0 0 0px 1000px transparent inset;
      transition: background-color 5000s ease-in-out 0s;
    }
    select:disabled {
      background: ${backgroundColors[700]};
    }
  `
);

export const SelectArrow = styled.span`
  position: absolute;
  right: 15px;
  top: 0;
  height: 100%;
  line-height: inherit;
  font-size: inherit;
  pointer-events: none;
  * {
    color: inherit;
    line-height: inherit;
    margin: 0;
    vertical-align: middle;
  }
`;

