import React from 'react';
import { Link } from 'react-router-dom';
import {
  Form, Icon, Input, Button,
} from 'antd';

const LoginDetails = (props) => {
  const { submit, form, onCancel } = props;
  return (
    <Form onSubmit={event => submit(event, form)} style={{ textAlign: 'left' }}>
      <Form.Item data-test="username-input" label="Username">
        {form.getFieldDecorator('username', {
          rules: [{ required: true, message: 'Please input your username!' }],
        })(<Input
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="john"
        />)}
      </Form.Item>
      <Form.Item data-test="password-input" label="Password">
        {form.getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }],
        })(<Input
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="password"
          placeholder="*****"
        />)}
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          block
        >
          Log in
        </Button>
      </Form.Item>
      <Link to="/passwordreset" onClick={onCancel}>Forgot Password?</Link>
    </Form>
  );
};

export default Form.create()(LoginDetails);
