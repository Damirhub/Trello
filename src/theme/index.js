import { getColors, getShades } from './colors';
import { fontFamily, fontSizes, fontWeights } from './fonts';
import { borderRadius, buttonRadius } from './borders';
import { breakpoints, mq } from './grid';

export const theme = isNight => ({
  colors: getColors(!isNight),
  fontColors: getShades(isNight),
  backgroundColors: getShades(!isNight),
  fontFamily,
  fontSizes,
  fontWeights,
  borderRadius: borderRadius,
  buttonRadius: buttonRadius,
  breakpoints,
  mq
});
