import React from 'react';
import {IconFont} from '../components/UI/IconFont/IconFont';
import {Input} from '../components/UI/Input/Input';
import {Textarea} from '../components/UI/Textarea/Textarea';
import {Select} from '../components/UI/Select/Select';
import {StatusValid, StatusInvalid} from '../components/UI/InputAddons/InputAddons';

const getFormField = (configItem, value, error, touched, handleBlur, handleChange) => {
  switch (configItem.type) {
    case 'email':
    case 'password':
    case 'number':
    case 'text':
      return (
        <Input
          key={configItem.name}
          className={configItem.classes}
          placeholder={configItem.placeholder}
          type={configItem.type}
          name={configItem.name}
          label={configItem.label}
          required={configItem.customAttrs && configItem.customAttrs.required}
          value={value || ''}
          error={error}
          touched={touched}
          handleChange={handleChange}
          handleBlur={handleBlur}
        >
          <StatusValid>
            <IconFont fontFamily="glyphicons" icon="ok-2" />
          </StatusValid>
          <StatusInvalid>
            <IconFont fontFamily="glyphicons" icon="remove-2" />
          </StatusInvalid>
        </Input>
      );
    case 'textarea':
      return (
        <Textarea
          key={configItem.name}
          className={configItem.classes}
          placeholder={configItem.placeholder}
          type={configItem.type}
          name={configItem.name}
          label={configItem.label}
          required={configItem.customAttrs && configItem.customAttrs.required}
          value={value || ''}
          error={error}
          touched={touched}
          handleChange={handleChange}
          handleBlur={handleBlur}
        >
          <StatusValid>
            <IconFont fontFamily="glyphicons" icon="ok-2" />
          </StatusValid>
          <StatusInvalid>
            <IconFont fontFamily="glyphicons" icon="remove-2" />
          </StatusInvalid>
        </Textarea>
      );
    case 'select':
      return (
        <Select
          key={configItem.name}
          className={configItem.classes}
          placeholder={configItem.placeholder}
          type={configItem.type}
          name={configItem.name}
          label={configItem.label}
          required={configItem.customAttrs && configItem.customAttrs.required}
          value={value}
          error={error}
          touched={touched}
          handleChange={handleChange}
          handleBlur={handleBlur}
          options={configItem.options}
        >
          <StatusValid>
            <IconFont fontFamily="glyphicons" icon="ok-2" />
          </StatusValid>
          <StatusInvalid>
            <IconFont fontFamily="glyphicons" icon="remove-2" />
          </StatusInvalid>
        </Select>
      );

    default:
      return null;
  }
};

export default getFormField;
