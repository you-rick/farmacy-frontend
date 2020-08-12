import {EMAIL_VALIDATOR} from "../../../../utils/validators/validators";

const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Required field'
    } else if (!EMAIL_VALIDATOR.test(values.username)) {
        errors.username = 'Invalid email address'
    }

    if (!values.password) {
        errors.password = 'Required field'
    }

    return errors
};

export default validate;
