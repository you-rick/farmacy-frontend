import { LOCALE } from '../../../../locale';

const validate = (values) => {
  const errors = {};
  const { required, confirmPassword } = LOCALE.errors.validation;

  if (!values.oldPassword) {
    errors.oldPassword = required;
  }
  if (!values.newPassword) {
    errors.newPassword = required;
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = required;
  } else if (values.newPassword !== values.confirmPassword) {
    errors.confirmPassword = confirmPassword;
  }

  return errors;
};

export default validate;
