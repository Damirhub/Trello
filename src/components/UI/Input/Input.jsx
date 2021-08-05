/************************************************************************************
*************************************************************************************
Component Name: Input

Sub components: StatusValid, StatusInvalid, Prefix, Label

Description:    Controled Input component
                'name' prop needs to match with node inside config folder in order to take it's regexp and validation messages.

Recieving Props: 
 - label: 
    default: null
    component: Input
    description:    Renders label element. If excluded it will not be rendered
 - placeholder: 
    default: null
    component: Input
    description:    Defines placeholder inside input element.
 - type: 
    default: null
    component: Input
    description:    Defines input type.
 - name: 
    default: null
    component: Input
    description:    Defines input name. Needs to match node inside validation configuration file in order to take regexps and validation messages.
 - value: 
    default: null
    component: Input
    description:    Can be set as outside value.
- showErrorMessage: 
    default: true
    component: Input
    description:    Display error message if any bellow input field.

Usage Example:
<Input
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
</Input>
*************************************************************************************
************************************************************************************/
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Label,
  Prefix,
  StatusValid,
  StatusInvalid,
  // ErrorMessage
} from '../InputAddons/InputAddons';
import { IconFont } from '../IconFont/IconFont';
import { InputWrapper, ShowPasswordWrapper } from './Input.style';

export const Input = props => {
  const {
    className,
    children,
    label,
    placeholder,
    type,
    name,
    value,
    required,
    // showErrorMessage,
    touched,
    error,
    handleChange,
    handleBlur
  } = props;

  let hasPrefix = false;

  const [passwordType, setPasswordType] = useState("password");

  const togglePasswordType = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  }

  const Children = React.Children.map(children, child => {
    if (child.type === StatusValid && touched && !error) {
      return React.cloneElement(child, { error: error });
    } else if (child.type === StatusInvalid && touched && error) {
      return React.cloneElement(child, { error: error });
    } else if (child.type === Prefix) {
      hasPrefix = true;
      return React.cloneElement(child);
    } else if (child.type !== StatusValid && child.type !== StatusInvalid) {
      return child;
    }
  });

  return (
    <InputWrapper
      className={className}
      hasPrefix={hasPrefix}
      touched={touched}
      error={error}
    >
      {label && <Label required={required}>{label}</Label>}
      <div>
        <input
          placeholder={placeholder}
          type={type === "password" ? passwordType : type}
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {/* {showErrorMessage &&
          touched &&
          error && <ErrorMessage>{error}</ErrorMessage>} */}
        {Children}
        {type === "password" &&
          <ShowPasswordWrapper>
            <IconFont
              fontFamily="icomoon"
              icon={passwordType === "password" ? "eye_open" : "eye_close"}
              onClick={togglePasswordType}
            />
          </ShowPasswordWrapper>
        }
      </div>
    </InputWrapper>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  required: PropTypes.bool,
  showErrorMessage: PropTypes.bool,
  touched: PropTypes.bool,
  error: PropTypes.string,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func
};

Input.defaultProps = {
  showErrorMessage: true
};
