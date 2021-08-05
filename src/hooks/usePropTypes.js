// Use this hook to check props from useSelector
// Usage Example: usePropTypes(isLoggedIn, 'bool', 'App')

import PropTypes from 'prop-types';

const usePropTypes = (propName, propType, componentName) => {
  PropTypes.checkPropTypes(
    {
      propName: PropTypes[propType],
    },
    {
      propName,
    },
    'props',
    componentName
  );
};

export default usePropTypes;
