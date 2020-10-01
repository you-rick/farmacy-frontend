import { LOCALE } from '../../../../locale';
import { EMAIL_VALIDATOR } from '../../../../utils/validators';

const validate = (values) => {
  const errors = {};
  const { loginEmailRequired, passwordRequired, email } = LOCALE.errors.validation;

  if (!values.username) {
    errors.username = loginEmailRequired;
  } else if (!EMAIL_VALIDATOR.test(values.username)) {
    errors.username = email;
  }

  if (!values.password) {
    errors.password = passwordRequired;
  }

  return errors;
};

export default validate;
