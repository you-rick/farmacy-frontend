import { LOCALE } from '../../../../../locale';
import { TICKET_NUMBER_VALIDATOR } from '../../../../../utils/validators';

const validate = (values) => {
  const errors = {};
  const { ticketNumber } = values;
  const { topbarSearchNumber } = LOCALE.errors.validation;

  if (ticketNumber && !TICKET_NUMBER_VALIDATOR.test(ticketNumber)) {
    errors.ticketNumber = topbarSearchNumber;
  }
  return errors;
};

export default validate;
