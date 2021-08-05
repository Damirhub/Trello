import {css} from '@emotion/react';
import styled from '@emotion/styled';

const xs = `width: 400px`;
const sm = `width: 500px`;
const lg = `width: 600px`;
const xl = `width: 842px`;
const xxl = `width: 100%`;
const fullPage = `width: 100%`;

export const ModalWrapper = styled.div(
  ({
    isBackdropVisible,
    isVisible,
    isBackdropOpacity,
    modalSize,
    theme: {backgroundColors, fontColors},
  }) => css`
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    left: 0;
    top: 0;
    z-index: 9999;
    transition: opacity 0.4s;
    opacity: ${isBackdropOpacity ? '1' : '0'};
    display: ${isBackdropVisible ? 'flex' : 'none'};
    > div {
      max-width: ${modalSize === 'fullPage' ? '100%' : '90%'};
      height: ${modalSize === 'fullPage' ? '100%' : 'auto'};
      margin-top: ${!isVisible ? '-75px' : '0px'};
      transition: 0.4s ease-out;
      border-radius: ${modalSize === 'fullPage' ? 0 : '3px'};
      ${modalSize === 'xs'
        ? xs
        : modalSize === 'sm'
        ? sm
        : modalSize === 'lg'
        ? lg
        : modalSize === 'xl'
        ? xl
        : modalSize === 'xxl'
        ? xxl
        : modalSize === 'fullPage'
        ? fullPage
        : 'width: 500px'};
      background: ${backgroundColors[900]};
      > div:first-of-type {
        text-align: right;
      }
    }
  `
);

export const ModalContainer = styled.div`
  overflow: auto;
  max-height: 100%;
`;
