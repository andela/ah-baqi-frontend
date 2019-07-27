import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'antd';
import { formItem, formButton } from '../../utils/formElements';

const LoginDetails = (props) => {
  const { submit, form, onCancel } = props;
  return (
    <Form onSubmit={event => submit(event, form)} style={{ textAlign: 'left' }}>
      {formItem(form, 'username-input', 'Username',
        'username', 'user', 'text', 'john')}
      {formItem(form, 'password-input', 'Password',
        'password', 'lock', 'password', 'johndoe@example.com')}
      {formButton('Log in')}
      <Link to="/passwordreset" onClick={onCancel}>Forgot Password?</Link>
    </Form>
  );
};

export default Form.create()(LoginDetails);
