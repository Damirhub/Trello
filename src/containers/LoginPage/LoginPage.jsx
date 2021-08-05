import React from 'react';
import Config from '../../config/main';

import useForm from '../../forms/useForm';
import getFormField from '../../forms/getFormField';
import configurationFields from '../../forms/configurationFields';

import {getUser} from '../../services/userService';
import {Form} from '../../components/UI/Form/Form';
import {Button} from '../../components/UI/Button/Button';
import {useDispatch} from 'react-redux';
import {userSetUser} from '../../store/reducers/userReducer';
import {authSuccess} from '../../store/reducers/authReducer';
import {LoginPageWrapper} from './LoginPage.style';

const LandingPage = () => {
  const dispatch = useDispatch();

  const initialValues = {};
  const formFields = Config.auth.trelloKeys;

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    backendErrors,
    touched,
    isSubmitting,
  } = useForm(getUser, formFields, initialValues, handleSubmissionSuccess);

  function handleSubmissionSuccess(user) {
    console.log('Login was SUCCESSFUL !!! with response: ', user);
    dispatch(userSetUser(user));
    dispatch(authSuccess(values));
  }

  return (
    <LoginPageWrapper>
      <h2>Hello fellow developer !</h2>
      <br />
      <p>
        You are running this application in <b>{process.env.NODE_ENV}</b> mode.
      </p>
      <p>
        After trello registration you can{' '}
        <a href="https://trello.com/app-key" rel="noreferrer" target="_blank">
          <strong>obtain API key here</strong>
        </a>{' '}
        ,
        <br />
        then follow instructions to get <strong>acces token.</strong>
      </p>
      <br />
      <p>Or you can choose to test with those provided below:</p>
      <br />
      <code>Api Key: 4bf064e3295243e852f39b10564a36bf</code>
      <br />
      <code>Server Token: 3d6325066890eee626f29ea4a447b08083108767b41423055e128823ddec1132</code>
      <br /> <br />
      <Form onSubmit={handleSubmit}>
        {formFields.map((field) =>
          getFormField(
            configurationFields[field],
            values[field],
            errors[field] || backendErrors[field],
            touched[field],
            handleBlur,
            handleChange
          )
        )}

        <Button type="submit" width="200px" center height="60px" disabled={isSubmitting}>
          CONTINUE
        </Button>
      </Form>
    </LoginPageWrapper>
  );
};

export default LandingPage;
