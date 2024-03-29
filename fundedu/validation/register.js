const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = validateRegisterInput = (data) => {
    let errors = {};
    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password2 = !isEmpty(data.password2) ? data.password2 : '';

    if(!Validator.isLength(data.name, { min: 2, max: 30 })) {
        errors.name = 'Name must be between 2 to 30 chars';
    }
    
    if(Validator.isEmpty(data.name)) {
        errors.name = 'Name field is required';
    }

    if(!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if(Validator.isEmpty(data.email)) {
        errors.email = 'Email is required';
    }

    if(!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = 'Password must have 6 chars';
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = 'Password is required';
    }

    if(!Validator.isLength(data.password2, {min: 6, max: 30})) {
        errors.password2 = 'Password must have 6 chars';
    }

    if(!Validator.equals(data.password, data.password2)) {
        errors.password2 = 'Password and Confirm Password must match';
    }

    if(Validator.isEmpty(data.password2)) {
        errors.password2 = 'Password is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}