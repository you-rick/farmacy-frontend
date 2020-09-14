import { LOCALE } from '../../../../locale';
import { EMAIL_VALIDATOR } from '../../../../utils/validators';

const validate = (values) => {
  const { required, email } = LOCALE.errors.validation;
  const errors = {};

  if (!values.email) {
    errors.email = required;
  } else if (!EMAIL_VALIDATOR.test(values.email)) {
    errors.email = email;
  }

  return errors;
};

export default validate;
