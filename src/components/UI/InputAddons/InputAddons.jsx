/************************************************************************************
*************************************************************************************
Components Names: StatusValid, StatusInvalid, Prefix

Description:    Additional components for input and other form fields

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
import React from 'react';
import PropTypes from 'prop-types';
import {
  LabelWrapper,
  PrefixWrapper,
  StatusWrapper,
  ErrorWrapper
} from './InputAddons.style';

export const Label = ({ className, children, required }) => {

  return (
    <LabelWrapper className={className}>
      {children} 
      {/* {required && <span>*</span>} */}
    </LabelWrapper>
  );
};

Label.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  required: PropTypes.bool
};

export const Prefix = props => {
  const { className, children } = props;

  return <PrefixWrapper className={className}>{children}</PrefixWrapper>;
};

Prefix.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export const StatusInvalid = props => {
  const { className, children, error } = props;

  return (
    <StatusWrapper className={className} error={error}>
      {children}
    </StatusWrapper>
  );
};

StatusInvalid.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  error: PropTypes.string
};

export const StatusValid = props => {
  const { className, children, error } = props;

  return (
    <StatusWrapper className={className} error={error}>
      {children}
    </StatusWrapper>
  );
};

StatusValid.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  error: PropTypes.string
};

export const ErrorMessage = props => {
  const { className, children } = props;

  return <ErrorWrapper className={className}>{children}</ErrorWrapper>;
};

ErrorMessage.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
