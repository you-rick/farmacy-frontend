import { LOCALE } from '../../../../locale';
import { NAME_VALIDATOR } from '../../../../utils/validators';

const validate = (values) => {
  const errors = {};
  const { required, firstName, lastName } = LOCALE.errors.validation;

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

  return errors;
};

export default validate;
