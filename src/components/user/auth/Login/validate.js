const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Required field'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)) {
        errors.username = 'Invalid email address'
    }

    if (!values.password) {
        errors.password = 'Required field'
    }

    return errors
};

export default validate;
