/************************************************************************************
*************************************************************************************
Component Name: Form

Sub components: 

Description:    Form component that contains form fields.

Usage Example:
<Form onSubmit={handleSubmit}>
  <p>I am content</p>
</Form>
*************************************************************************************
************************************************************************************/
import React from 'react';
import PropTypes from 'prop-types';
import {FormWrapper} from './Form.style';

export const Form = ({className, children, onSubmit}) => {

  return (
    <FormWrapper className={className} onSubmit={onSubmit} noValidate>
      {children}
    </FormWrapper>
  );
};

Form.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onSubmit: PropTypes.func,
};
