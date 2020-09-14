import { LOCALE } from '../../../../../locale';
import { TICKET_NUMBER_VALIDATOR } from '../../../../../utils/validators';

const validate = (values) => {
  const errors = {};
  const { ticketId } = values;
  const { topbarSearchNumber } = LOCALE.errors.validation;

  if (ticketId && !TICKET_NUMBER_VALIDATOR.test(ticketId)) {
    errors.ticketId = topbarSearchNumber;
  }
  return errors;
};

export default validate;
