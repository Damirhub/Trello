import {css} from '@emotion/react';
import styled from '@emotion/styled';

export const IconWrapper = styled.i(
  ({
    active,
    inline,
    block,
    inlineBlock,
    padding,
    hoverable,
    shadeColor,
    shadeHover,
    theme: {fontColors, colors},
  }) => css`
    padding: ${padding};
    cursor: pointer;
    display: ${inline
      ? 'inline'
      : block
      ? 'block'
      : inlineBlock
      ? 'inline-block'
      : 'flex'};
    fill: ${active ? colors.brandColors.brand : fontColors[shadeColor]};

    ${hoverable &&
    !active &&
    `
    :hover {
      fill: ${fontColors[shadeHover]};
    }
  `}
  `
);
