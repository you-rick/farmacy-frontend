import { LOCALE } from '../../../../../locale';

const validate = (values) => {
  const errors = {};
  const { required } = LOCALE.errors.validation;

  if (!values.ticketId) {
    errors.ticketId = required;
  }
  return errors;
};

export default validate;
