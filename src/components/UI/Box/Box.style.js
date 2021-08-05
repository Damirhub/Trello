import {css} from '@emotion/react';
import styled from '@emotion/styled';

export const BoxWrapper = styled.div(({ 
  m,
  p,
  textAlign,
  pointer,
  inline,
  bg,
  border, 
  borderColor, 
  theme: { backgroundColors, fontColors } 
}) => css`
  margin: ${m};
  padding: ${p};
  text-align: ${textAlign};
  cursor: ${pointer ? "pointer" : "inherit"};
  display: ${inline ? "inline-block" : "block"};
  background: ${backgroundColors[bg]};
  border: ${border};
  border-color: ${fontColors[borderColor]};
`)
