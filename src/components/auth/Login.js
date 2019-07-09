import React from 'react';
import {
  Form, Icon, Input, Button,
} from 'antd';

const LoginDetails = (props) => {
  const { submit, form } = props;
  return (
    <Form onSubmit={event => submit(event, form)}>
      <Form.Item data-test="username-input">
        {form.getFieldDecorator('username', {
          rules: [{ required: true, message: 'Please input your username!' }],
        })(<Input
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Username"
        />)}
      </Form.Item>
      <Form.Item data-test="password-input">
        {form.getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }],
        })(<Input
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="password"
          placeholder="Password"
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
    </Form>
  );
};

export default Form.create()(LoginDetails);
