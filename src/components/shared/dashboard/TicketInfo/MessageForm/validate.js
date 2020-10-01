import { LOCALE } from '../../../../../locale';

const validate = (values) => {
  const errors = {};
  const { required } = LOCALE.errors.validation;

  if (!values.message) {
    errors.message = required;
  }

  return errors;
};

export default validate;
