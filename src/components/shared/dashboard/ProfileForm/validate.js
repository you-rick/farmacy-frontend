import { LOCALE } from '../../../../locale';
import { NAME_VALIDATOR, ONLY_NUMBERS_VALIDATOR } from '../../../../utils/validators';

const validate = (values) => {
  const errors = {};
  const { required, firstName, lastName, isNumber } = LOCALE.errors.validation;

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

  if (!ONLY_NUMBERS_VALIDATOR.test(values.extension)) {
    errors.extension = isNumber;
  }

  return errors;
};

export default validate;
