/************************************************************************************
*************************************************************************************
Component Name: Select

Sub components: StatusValid, StatusInvalid, Prefix, Label

Description:    Controled Select component
                'name' prop needs to match with node inside config folder in order to take it's regexp and validation messages.

Recieving Props: 
 - label: 
    default: null
    component: Select
    description:    Renders label element. If excluded it will not be rendered
 - placeholder: 
    default: null
    component: Select
    description:    Defines placeholder inside select element.
 - type: 
    default: null
    component: Select
    description:    Defines select type.
 - name: 
    default: null
    component: Select
    description:    Defines select name. Needs to match node inside validation configuration file in order to take regexps and validation messages.
 - value: 
    default: null
    component: Select
    description:    Can be set as outside value.
- showErrorMessage: 
    default: true
    component: Select
    description:    Display error message if any bellow select field.

Usage Example:
<Select
  className={'input-field'}
  label={'First name'}
  placeholder={'Type first name here'} 
  type={'text'}
  name={'cFirstName'}
  value={'Slim Shady'}
  showErrorMessage={false}
>
  <Prefix>prefix</Prefix>
  <StatusValid>Input value is valid input</StatusValid>
  <StatusInvalid>Input value is invalid input</StatusInvalid>
</Select>
*************************************************************************************
************************************************************************************/
import React from 'react';
import PropTypes from 'prop-types';
import {Label, Prefix, ErrorMessage, StatusValid, StatusInvalid} from '../InputAddons/InputAddons';
import {IconFont} from '../IconFont/IconFont';
import {SelectWrapper, SelectArrow} from './Select.style';

export const Select = (props) => {
  const {
    className,
    children,
    label,
    placeholder,
    type,
    name,
    value,
    required,
    showErrorMessage,
    touched,
    error,
    handleChange,
    handleBlur,
    options,
  } = props;

  let hasPrefix = false;

  const Children = React.Children.map(children, (child) => {
    if (child.type === StatusValid && touched && !error) {
      return React.cloneElement(child, {error: error});
    } else if (child.type === StatusInvalid && touched && error) {
      return React.cloneElement(child, {error: error});
    } else if (child.type === Prefix) {
      hasPrefix = true;
      return React.cloneElement(child);
    } else if (child.type !== StatusValid && child.type !== StatusInvalid) {
      return child;
    }
  });

  return (
    <SelectWrapper
      className={className}
      hasPrefix={hasPrefix}
      touched={touched}
      error={error}
      value={value}
    >
      {label && <Label required={required}>{label}</Label>}
      <div>
        <select
          type={type}
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          {placeholder && (
            <option value={''} disabled hidden>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
        {showErrorMessage && touched && error && <ErrorMessage>{error}</ErrorMessage>}
        {Children}
        <SelectArrow>
          <IconFont fontFamily="glyphicons" icon="chevron-down" />
        </SelectArrow>
      </div>
    </SelectWrapper>
  );
};

Select.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  required: PropTypes.bool,
  showErrorMessage: PropTypes.bool,
  error: PropTypes.string,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
};

Select.defaultProps = {
  showErrorMessage: true,
};
