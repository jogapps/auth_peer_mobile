import * as yup from 'yup';

const emailMatch = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const loginSchema = yup.object().shape({
    email: yup.string().required('This field is required').matches(emailMatch, (email) => 'Enter valid email'),
    password: yup.string().min(6, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is required'),
});

export const registerSchema = yup.object().shape({
    name: yup.string().required('This field is required'),
    username: yup.string().required('This field is required'),
    phone: yup.string().required('This field is required'),
    email: yup.string().required('This field is required').matches(emailMatch, (email) => 'Enter valid email'),
    password: yup.string().min(6, ({ min }) => `Password must be at least ${min} characters`)
        .required('This field is required'),
});

export const profileSchemaIndivivdual = yup.object().shape({
    sex: yup.string().required('This field is required'),
    name: yup.string().required('This field is required'),
    email: yup.string().required('This field is required').matches(emailMatch, (email) => 'Enter valid email'),
    my_number: yup.string().min(10, ({ min }) => `This field must be at least ${min} characters`).required('This field is required'),
    phone: yup.string().required('This field is required'),
    date_of_birth: yup.string().required('This field is required'),
    residential_address: yup.string().required('This field is required'),
    occupation: yup.string().required('This field is required')
});

export const resetPasswordSchema = yup.object().shape({
    current_password: yup.string().min(6, ({ min }) => `Password must be at least ${min} characters`)
        .required('This field is required'),
    new_password: yup.string().min(6, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is required'),
    confirm_password: yup.string().min(6, ({ min }) => `Password must be at least ${min} characters`)
        .required('This field is required'),
});

export const mortgageSchema = yup.object().shape({
    address: yup.string().required('This field is required'),
    title: yup.string().required('This field is required'),
    valuation: yup.string().required('This field is required'),
    remark: yup.string().required('This field is required'),
});

export const cashFormSchema = yup.object().shape({
    amount: yup.string().required('This field is required'),
    situation: yup.string().required('This field is required'),
    remark: yup.string().required('This field is required'),
}); 

export const chequeFormSchema = yup.object().shape({
    bank_information: yup.string().required('This field is required'),
    due_date: yup.string().required('This field is required'),
    value: yup.string().required('This field is required'),
    remark: yup.string().required('This field is required'),
}); 

export const instrumentFormSchema = yup.object().shape({
    type: yup.string().required('This field is required'),
    value: yup.string().required('This field is required'),
    remark: yup.string().required('This field is required'),
}); 

export const resetPasswordEmailScheaa = yup.object().shape({
    email: yup.string().required('This field is required').matches(emailMatch, (email) => 'Enter valid email'),
}); 

export const resetForgotPasswordSchema = yup.object().shape({
    new_password: yup.string().min(6, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is required'),
    confirm_password: yup.string().min(6, ({ min }) => `Password must be at least ${min} characters`)
        .required('This field is required'),
});