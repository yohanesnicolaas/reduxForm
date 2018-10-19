import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {TextField} from 'redux-form-antd';

const required = value => (value ? undefined: 'This field is required');

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

const AddLeaveForm = (props) => {
    const { handleSubmit, submitting } = props
    return(
        <form onSubmit={handleSubmit}>
            <Field name="name" type="text"
                component={TextField} label="Employee Name"
                validate={required}
            />
            <Field name="startDateLeave" type="text"
                component={TextField} label="Start Date Leave"
                validate={required}
            />
            <Field name="endDateLeave" type="text"
                component={TextField} label="End Date Leave"
                validate={required}
            />
            <Field name="reason" type="text"
                component={TextField} label="Reason"
            />
            <div>
                <button type="submit" disabled={submitting}>Submit</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'addLeaveForm'
})(AddLeaveForm)