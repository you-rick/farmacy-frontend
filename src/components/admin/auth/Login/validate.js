import { LOCALE } from '../../../../locale';
import { EMAIL_VALIDATOR } from '../../../../utils/validators';

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = LOCALE.errors.validation.required;
  } else if (!EMAIL_VALIDATOR.test(values.username)) {
    errors.username = LOCALE.errors.validation.email;
  }

  if (!values.password) {
    errors.password = LOCALE.errors.validation.required;
  }

  return errors;
};

export default validate;
