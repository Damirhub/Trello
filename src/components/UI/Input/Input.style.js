import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const InputWrapper = styled.div(({ 
  hasPrefix,
  touched,
  error,
  theme: { colors, fontColors, fontSizes, backgroundColors, borderRadius }
}) => css`
  text-align: left;
  box-sizing: border-box;
  display: inline-block;
  width: 100%;
  margin-bottom: 10px;
  /* padding: 20px; */


  color: ${fontColors[900]};
  background: transparent;
  > div {
    position: relative;
    line-height: 48px;
    font-size: ${fontSizes.md};
  }
  input {
    width: 100%;
    box-sizing: border-box;
    line-height: inherit;
    height: 48px;
    font-size: inherit;
    border: 1px solid;
    color: ${fontColors[900]};
    background: ${backgroundColors[900]};
    border-radius: ${borderRadius.md};
    padding: 0 16px;
    padding-left: ${hasPrefix ? '46px' : '16px'};

    border-color: ${
      (touched && error) ? colors.brandColors.danger : backgroundColors[600]
    }
  }
  input::placeholder {
    /* font-style: italic; */
  }
  input:-webkit-autofill {
    border: 1px solid;
    border-color: ${
      (touched && error) ? colors.brandColors.danger : backgroundColors[600]
    }
    -webkit-text-fill-color: ${fontColors[900]};
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
  }
  input:-webkit-autofill::hover {
    border: 1px solid;
    border-color: ${
      touched
        ? error
          ? colors.brandColors.danger
          : colors.brandColors.success
        : backgroundColors[600]
    }
    -webkit-text-fill-color: ${fontColors[900]};
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
  }
  input:-webkit-autofill::focus {
    border: 1px solid;
    border-color: ${
      touched
        ? error
          ? colors.brandColors.danger
          : colors.brandColors.success
        : backgroundColors[600]
    };
    -webkit-text-fill-color: ${fontColors[900]};
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
  }
  input::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`)

export const ShowPasswordWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 0;
  height: 100%;
  line-height: inherit;
  font-size: inherit;
  cursor: pointer;
  * {
    color: inherit;
    line-height: inherit;
    margin: 0;
  }
`
