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
  `
);

export const CardLeftWrapper = styled.section(
  ({theme: {mq, colors, fontColors, backgroundColors}}) => css`
    flex-basis: 500px;
    margin-right: 30px;
    h3 { 
      cursor:pointer;
      color: ${fontColors[60]};
      }
    input {
      width: 100%;
      height: 35px;
      border-width: 0;
      font-size: 16px;
      font-weight: 700;
      color: ${backgroundColors[100]};
      ::placeholder {
        color: ${backgroundColors[100]};
      }
    }
    input:focus-visible {
      outline: solid ${colors.brandColors.brand} 2px;
    }
    textarea {
      width: 100%;
      outline: solid ${colors.brandColors.brand} 1px;
      height: 100px;
    }
  `
);

export const AddCommentWrapper = styled.div(
  ({theme: {colors}}) => css`
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
    
  `
);



export const CardRightWrapper = styled.section(() => css``);
