import { EMAIL_VALIDATOR } from '../../../../utils/validators/validators';
import { LOCALE } from '../../../../locale';

const validate = (values) => {
  const errors = {};
  const { required, email } = LOCALE.errors.validation;

  if (!values.subject) {
    errors.subject = required;
  }
  if (!values.to) {
    errors.to = required;
  } else if (!EMAIL_VALIDATOR.test(values.to)) {
    errors.to = email;
  }
  if (!values.requester) {
    errors.requester = required;
  }
  if (!values.department) {
    errors.department = required;
  }
  if (!values.component) {
    errors.component = required;
  }
  if (!values.type) {
    errors.type = required;
  }
  if (!values.priority) {
    errors.priority = required;
  }

  return errors;
};

export default validate;
