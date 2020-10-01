import { EMAIL_VALIDATOR, NAME_VALIDATOR } from '../../../../utils/validators';
import { LOCALE } from '../../../../locale';

const validate = (values) => {
  const errors = {};
  const { required, email, firstName, lastName } = LOCALE.errors.validation;

  if (!values.firstName) {
    errors.firstName = required;
  } else if (!NAME_VALIDATOR.test(values.firstName)) {
    errors.firstName = firstName;
  }

  if (!values.lastName) {
    errors.lastName = required;
  } else if (!NAME_VALIDATOR.test(values.lastName)) {
    errors.lastName = lastName;
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
