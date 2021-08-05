import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const TextareaWrapper = styled.div(({ 
  hasPrefix,
  touched,
  error,
  theme: { colors, fontColors, fontSizes, backgroundColors, borderRadius }
}) => css`
  text-align: left;
  box-sizing: border-box;
  /* display: inline-block; */
  width: 100%;
  color: ${fontColors[900]};
  background: transparent;
  > div {
    position: relative;
    line-height: 25px;
    font-size: ${fontSizes.sm};
    margin-bottom: 10px;
  }
  textarea {
    width: 100%;
    box-sizing: border-box;
    line-height: inherit;
    display: block;
    resize: none;
    font-size: ${fontSizes.sm};
    border: 1px solid;
    color: ${fontColors[900]};
    background: ${backgroundColors[900]};
    border-radius:${borderRadius.md};
    padding: 2px 8px;
    /* padding-left: ${hasPrefix ? '46px' : '16px'}; */
    box-shadow: 0 1px 0 rgb(9 30 66 / 25%);

    border-color: ${
      (touched && error) ? colors.brandColors.danger : backgroundColors[600]
    }
  }
  textarea:focus-visible {
    outline: -webkit-focus-ring-color auto 0px;
}
  textarea::placeholder {
    /* font-style: italic; */
  }
  textarea:-webkit-autofill {
    border: 1px solid;
    border-color: ${
      (touched && error) ? colors.brandColors.danger : backgroundColors[600]
    }
    -webkit-text-fill-color: ${fontColors[900]};
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
  }
  textarea:-webkit-autofill::hover {
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
  textarea:-webkit-autofill::focus {
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
  textarea::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  textarea::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`)
