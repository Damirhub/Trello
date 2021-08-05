import {css} from '@emotion/react';
import styled from '@emotion/styled';

export const BoardsSection = styled.section(
  () => css`
    margin: 40px 15px 0;
    max-width: 850px;
    width: 100%;
    h4 {
      padding: 20px 0;
      i {
        padding: 0 10px;
        margin-top: -4px;
        font-size: 22px;
      }
    }
  `
);

export const BoardsListWrapper = styled.ul(
  () => css`
    display: flex;
    flex-wrap: wrap;
    position: relative;
  `
);

export const BoardPreviewWrapper = styled.li(
  ({theme: {mq, fontColors}, bgImage, backgroundColor}) => css`
    background-image: url(${bgImage && bgImage[2].url});
    background-size: cover;
    background-color: ${backgroundColor ? backgroundColor : 'rgba(0, 0, 0, 0.3)'};
    background-blend-mode: darken;
    background-position: 50%;
    display: inline-block;
    margin: 0 2% 2% 0;
    width: 23%;
    box-sizing: content-box;
    height: 90px;
    border-radius: 3px;
    cursor: pointer;

    ${mq('big')} {
      width: 48%;
    }
    ${mq('medSmall')} {
      width: 96%;
    }
    :hover {
      filter: brightness(90%);
    }
    > p {
      padding: 8px;
      font-size: 16px;
      font-weight: 700;
      color: ${fontColors[100]};
    }
  `
);

export const CreateBoardWrapper = styled.div(
  ({theme: {fontColors, backgroundColors}}) => css`
    background-color: ${backgroundColors[600]};
    background-size: cover;
    display: inline-block;
    margin: 0 2% 2% 0;
    width: 23%;
    box-sizing: content-box;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 3px;
    cursor: pointer;
    p {
      color: ${fontColors[70]};
      font-weight: 400;
      text-align: center;
      line-height: 1.4;
      span {
        font-size: 12px;
      }
    }
  `
);

export const ButtonsWrapper = styled.div(
  () => css`
    display: flex;
    justify-content: space-between;
    align-items: bottom;
    position: absolute;
    bottom: 20px;

    button {
      margin: 5px;
      font-size: 12px;
      height: 25px;
      padding: 0 5px;
    }
  `
);
