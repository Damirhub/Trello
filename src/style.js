import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const AppWrapper = styled.div(({ 
  theme: { backgroundColors, fontColors, fontFamily } 
}) => css`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 100%;
  color: ${fontColors[900]};
  background: ${backgroundColors[800]};
  font-family: ${fontFamily};
`)

// export const AppWrapper = styled.div(
//   ({isLoggedIn, theme: {backgroundColors, fontColors, fontFamily, mq}}) => css`
//     display: flex;
//     flex-direction: ${isLoggedIn ? 'row' : 'column'};
//     flex-grow: 1;
//     min-height: 100%;
//     color: ${fontColors[800]};
//     font-family: ${fontFamily};
//     background-color: ${backgroundColors[800]};
//     ${mq('medium')} {
//       flex-direction: column;
//     }
//   `
// );


// export const MainWrapper = styled.div`
//   display: flex;
//   flex-grow: 1;
//   max-width: 1260px;
//   width: 100%;
//   margin: 0 auto;
// `
