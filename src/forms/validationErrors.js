import validationRules from './validationRules';

const validationErrors = (values, fields) => {
  const errors = {};
  for (var prop in fields) {
    let config = fields[prop];

    if (config.hasOwnProperty('customAttrs')) {
      for (let validationField in fields[prop].customAttrs) {
        if (prop === 'phone') {
          validationRules(
            values[config.name].fullNumber,
            config.name,
            [validationField, config.customAttrs[validationField]],
            errors,
            config.validationMessages[validationField]
          );
        } else {
          if (validationField === 'required' && config.customAttrs[validationField]) {
            validationRules(
              values[config.name],
              config.name,
              [validationField, config.customAttrs[validationField]],
              errors,
              config.validationMessages[validationField]
            );
          } else if (validationField !== 'required' && values[config.name]) {
            validationRules(
              values[config.name],
              config.name,
              [validationField, config.customAttrs[validationField]],
              errors,
              config.validationMessages[validationField]
            );
          }
        }
      }
      if (prop === 'phone' && values.phone.pattern) {
        validationRules(
          values.phone.fullNumber,
          config.name,
          ['regex', values.phone.pattern],
          errors,
          config.validationMessages['regex']
        );
      }
    }
    //confirm password if match:
    if (config.hasOwnProperty('specifications')) {
      for (let i = 0, length = config.specifications.length; i < length; i++) {
        let specification = config.specifications[i];

        if (specification.matchToPassword && specification.compareWith) {
          validationRules(
            values[config.name],
            config.name,
            [specification.validationKey, values[specification.compareWith]],
            errors,
            config.validationMessages[specification.validationKey]
          );
        }
        if (specification.hasLatLng) {
          validationRules(
            values['latitude'],
            config.name,
            [specification.validationKey, values['longitude']],
            errors,
            config.validationMessages[specification.validationKey]
          );
        }
      }
    }
  }
  return errors;
};

export default validationErrors;
