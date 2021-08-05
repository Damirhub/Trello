import {useState, useEffect} from 'react';
import {pick} from 'lodash';

import validationErrors from './validationErrors';
import submissionErrors from './submissionErrors';
import configurationFields from './configurationFields';
import toast from 'cogo-toast';

const useForm = (callback, formFields, initialValues, handleSubmissionSuccess) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [backendErrors, setBackendErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(
    () => {
      setValues(initialValues);
    },
    // eslint-disable-next-line
    [JSON.stringify(initialValues)]
  );

  let fields = pick(configurationFields, formFields);

  useEffect(
    () => {
      let isSubscribed = true;
      if (
        Object.keys(errors).length === 0 &&
        Object.keys(backendErrors).length === 0 &&
        isSubmitting
      ) {
        callback(values)
          .then((response) => {
            // Success
            handleSubmissionSuccess(response);
            if (isSubscribed) {
              setIsSubmitting(false);
            }
          })
          .catch((err) => {
            // Error
            if (err.response) {
              console.log(
                'The request was made and the server responded with a status code that falls out of the range of 2xx ',
                err.response.data
              );
              let backendFieldsError =
                err.response && err.response.data && err.response.data.errors;
              if (backendFieldsError) {
                setBackendErrors(submissionErrors(backendFieldsError, formFields));
              }
              toast.error('Something went wrong! ');
            } else if (err.request) {
              console.log(
                "The request was made but no response was received, 'error.request' is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in Node.js ",
                err.request
              );
            } else {
              console.log(
                'Something happened in setting up the request and triggered an Error ',
                err.message
              );
              toast.error('Something went wrong! ');
            }
            if (isSubscribed) {
              setIsSubmitting(false);
            }
          });
      } else if (
        (Object.keys(errors).length !== 0 || Object.keys(backendErrors).length !== 0) &&
        isSubmitting
      ) {
        //toast.error("Please fill all the fields correctly");
        if (isSubscribed) {
          setIsSubmitting(false);
        }
      } else {
        if (isSubscribed) {
          setIsSubmitting(false);
        }
      }
      return () => (isSubscribed = false);
    },
    // eslint-disable-next-line
    [JSON.stringify(errors), JSON.stringify(backendErrors), isSubmitting]
  );

  useEffect(
    () => {
      setErrors(validationErrors(values, fields));
    },
    // eslint-disable-next-line
    [values, touched]
  );

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validationErrors(values, fields));

    let allTouched = formFields.reduce(function (result, item) {
      result[item] = true;
      return result;
    }, {});
    setTouched((touched) => allTouched);
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    //event.persist();
    let inputValue = event.target.value;
    let inputName = event.target.name;
    setValues((values) => ({
      ...values,
      [inputName]: inputValue,
    }));

    let res = Object.assign({}, backendErrors);
    delete res[inputName];
    setBackendErrors(res);
  };

  const resetValues = () => {
    setValues(initialValues);
    setTouched(false);
  };

  const handleBlur = (event) => {
    //event.persist();
    let inputName = event.target.name;
    setTouched((touched) => ({...touched, [inputName]: true}));
  };

  return {
    handleBlur,
    handleChange,
    resetValues,
    handleSubmit,
    values,
    errors,
    backendErrors,
    touched,
    isSubmitting,
  };
};

export default useForm;
