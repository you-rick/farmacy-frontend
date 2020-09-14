import { LOCALE } from '../../../../locale';
import { EMAIL_VALIDATOR } from '../../../../utils/validators';

const validate = (values) => {
  const errors = {};
  const { required, email } = LOCALE.errors.validation;

  if (!values.username) {
    errors.username = required;
  } else if (!EMAIL_VALIDATOR.test(values.username)) {
    errors.username = email;
  }

  if (!values.password) {
    errors.password = required;
  }

  return errors;
};

export default validate;
