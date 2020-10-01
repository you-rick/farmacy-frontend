import { EMAIL_VALIDATOR } from '../../../../utils/validators';
import { LOCALE } from '../../../../locale';

const validate = (values) => {
  const errors = {};
  const { required, email, maxChar } = LOCALE.errors.validation;
  const subjectLengthMax = 75;

  if (!values.subject) {
    errors.subject = required;
  } else if (values.subject.length > subjectLengthMax) {
    errors.subject = maxChar(subjectLengthMax);
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
  if (!values.description) {
    errors.description = required;
  }

  return errors;
};

export default validate;
