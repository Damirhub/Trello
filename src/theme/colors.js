const brandColors = {
  brand: '#026aa7',
  overBrandText: '#ffffff',
  danger: '#A8111B',
  danger2: '#b92b36',
  success: '#61bd4f',
  note: '#efefef',
  headerText: '#cccccc',

  // TODO: check This
  headerBg: 'linear-gradient(90deg, #000000 768px, #2c2c2c 1280px, #333333 100%)',
};

const dark = {
  900: '#101010',
  800: '#222222',
  700: '#555555',
  600: '#5e6c84',
  500: '#c4c4c4',
  400: '#ebecf0', //
  300: '#f2f2f2',
  200: '#f4f5f7', //
  100: '#ffffff',
  90: '#5aac44',
  80: '#ff991f', //
  70: '#172b4d', //
  60: '#9C5257',
  50: '#ffffff4d',
  40: '#00000014'
  
};

const light = {
  900: '#ffffff',
  800: '#fbfbfb',
  700: '#f4f5f7', //
  600: '#ebecf0', //
  500: '#c4c4c4',
  400: '#5e6c84',
  300: '#555555',
  200: '#222222',
  100: '#101010',
  90: '#5aac44',
  80: '#ffa941',
  70: '#bdd5ff', //
  60: '#E5B8BB',
  50: '#ffffff4d',
  40: '#00000014'
};

const first = {
  color: brandColors.brand,
  text: brandColors.overBrandText,
  hover: light[70],
};

const second = {
  color: dark[50],
  text: light[900],
};

const third = {
  color: dark[40],
  text: dark[70],
};

const fourth = {
  color: dark[80],
  text: light[100],
  hover: light[80],
};

const fifth = {
  color: dark[90],
  text: light[900],
  hover: brandColors.success,
};

const sixth = {
  color: dark[400],
  text: light[100],
  hover: dark[500],
};

const danger = {
  color: brandColors.danger,
  text: light[900],
  hover: brandColors.danger2,
};

const getColors = (isNight) => ({
  brandColors,
  light,
  dark,

  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  danger,
});

const getShades = (isNight) => {
  return isNight ? dark : light;
};

export {getColors, getShades};
