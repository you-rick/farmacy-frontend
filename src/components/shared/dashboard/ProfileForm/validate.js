import { LOCALE } from '../../../../locale';

const validate = (values) => {
  const errors = {};
  const { required } = LOCALE.errors.validation;

  if (!values.firstName) {
    errors.firstName = required;
  }
  if (!values.lastName) {
    errors.lastName = required;
  }

  return errors;
};

export default validate;
