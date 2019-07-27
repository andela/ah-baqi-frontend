import React from 'react';
import { Form } from 'antd';
import { formItem, formButton } from '../../utils/formElements';

const SignupDetails = ({ submit, form }) => (
  <Form onSubmit={event => submit(event, form)} className="login-form" style={{ textAlign: 'left' }}>
    {formItem(form, 'username-input', 'Username',
      'username', 'user', 'text', 'john')}
    {formItem(form, 'email-input', 'Email',
      'email', 'user', 'email', 'johndoe@example.com')}
    {formItem(form, 'password-input', 'Password',
      'password', 'lock', 'password', 'johndoe@example.com')}
    {formButton('Register')}
  </Form>
);

export default Form.create()(SignupDetails);
