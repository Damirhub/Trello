const submissionErrors = (values, fields) => {
  const errors = {};
  fields.forEach((field) => {
    if (values[field]) {
      errors[field] = values[field][0];
    }
  });
  return errors;
};

export default submissionErrors;
