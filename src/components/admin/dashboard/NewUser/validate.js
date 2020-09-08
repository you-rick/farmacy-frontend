import { EMAIL_VALIDATOR } from '../../../../utils/validators/validators';
import { LOCALE } from '../../../../locale';

const validate = (values) => {
  const errors = {};
  const { required, email } = LOCALE.errors.validation;

  if (!values.firstName) {
    errors.firstName = required;
  }
  if (!values.lastName) {
    errors.lastName = required;
  }
  if (!values.email) {
    errors.email = required;
  } else if (!EMAIL_VALIDATOR.test(values.email)) {
    errors.email = email;
  }
  if (!values.department) {
    errors.department = required;
  }
  if (!values.role) {
    errors.role = required;
  }

  return errors;
};

export default validate;
