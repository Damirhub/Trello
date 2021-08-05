export const breakpoints = {
  verySmall: 360,
  small: 480,
  medSmall: 600,
  medium: 768,
  big: 991,
  large: 1280,
  iphone6: 375
};

export const mq = (n, reverse) => {
  const bpArray = Object.keys(breakpoints).map(key => [key, breakpoints[key]]);

  const [result] = bpArray.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, reverse ? `@media (min-width: ${size+1}px)` : `@media (max-width: ${size}px)`];
    return acc;
  }, []);

  return result;
};
