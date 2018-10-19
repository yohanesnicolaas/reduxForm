import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {TextField} from 'redux-form-antd';

const required = value => (value ? undefined: 'This field is required');
const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i.test(value) ? ' Please enter a valid email address!' : undefined;

const renderField = ({
    input, label, type, meta: { touched, error, warning }
}) => (
  <div>
    <label> {label} </label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const ValidatedRegisterForm = (props) => {
    const { handleSubmit, submitting } = props
    return(
        <form onSubmit={handleSubmit}>
            <Field name="email" type="text"
                component={TextField} label="Email" placeholder="Email"
                validate={[email, required]}
            />
            <div>
                <button type="submit" disabled={submitting}>Submit</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'validatedRegisterForm'
})(ValidatedRegisterForm)