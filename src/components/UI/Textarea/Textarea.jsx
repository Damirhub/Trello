/************************************************************************************
*************************************************************************************
Component Name: Textarea

Sub components: StatusValid, StatusInvalid, Prefix, Label

Description:    Controled Textarea component
                'name' prop needs to match with node inside config folder in order to take it's regexp and validation messages.

Recieving Props: 
 - label: 
    default: null
    component: Textarea
    description:    Renders label element. If excluded it will not be rendered
 - placeholder: 
    default: null
    component: Textarea
    description:    Defines placeholder inside textarea element.
 - type: 
    default: null
    component: Textarea
    description:    Defines textarea type.
 - name: 
    default: null
    component: Textarea
    description:    Defines textarea name. Needs to match node inside validation configuration file in order to take regexps and validation messages.
 - value: 
    default: null
    component: Textarea
    description:    Can be set as outside value.
- showErrorMessage: 
    default: true
    component: Textarea
    description:    Display error message if any bellow textarea field.

Usage Example:
<Textarea
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
</Textarea>
*************************************************************************************
************************************************************************************/
import React from 'react';
import PropTypes from 'prop-types';
import {
  Label,
  Prefix,
  StatusValid,
  StatusInvalid,
  // ErrorMessage
} from '../InputAddons/InputAddons';
import { TextareaWrapper } from './Textarea.style';

export const Textarea = props => {
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
    <TextareaWrapper
      className={className}
      hasPrefix={hasPrefix}
      touched={touched}
      error={error}
    >
      {label && <Label required={required}>{label}</Label>}
      <div>
        <textarea
          rows='3'
          placeholder={placeholder}
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {/* {showErrorMessage &&
          touched &&
          error && <ErrorMessage>{error}</ErrorMessage>} */}
        {Children}
      </div>
    </TextareaWrapper>
  );
};

Textarea.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  required: PropTypes.bool,
  showErrorMessage: PropTypes.bool,
  touched: PropTypes.bool,
  error: PropTypes.string,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func
};

Textarea.defaultProps = {
  showErrorMessage: true
};
