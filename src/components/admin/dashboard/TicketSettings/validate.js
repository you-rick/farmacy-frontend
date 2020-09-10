import { LOCALE } from '../../../../locale';

const validate = (values) => {
  const errors = {};
  const { required, isNumber, tooSmall } = LOCALE.errors.validation;
  const valuesList = Object.entries(values);

  valuesList.forEach((item) => {
    const key = item[0];
    const value = item[1];

    if (!value) {
      errors[key] = required;
    } else if (Number.isNaN(Number(value))) {
      errors[key] = isNumber;
    } else if (value < 1) {
      errors[key] = tooSmall;
    }
  });

  return errors;
};

export default validate;
