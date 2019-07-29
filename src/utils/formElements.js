import React from 'react';
import {
  Form,
  Icon,
  Input,
  Button,
} from 'antd';

export const formItem = (form, dataTest, label, fieldDecorator,
  iconType, inputType, placeHolder, validator = '', hasFeedback = false,
  name = '', onChange = null) => (
    <Form.Item data-test={dataTest} label={label} hasFeedback={hasFeedback}>
      {form.getFieldDecorator(fieldDecorator, {
        rules: [{ required: true, message: 'This field is required' },
          { validator: { validator } }],
      })(
        <Input
          prefix={<Icon type={iconType} style={{ color: 'rgba(0,0,0,.25)' }} />}
          type={inputType}
          placeholder={placeHolder}
          name={name}
          onChange={onChange}
        />,
      )}
    </Form.Item>
);

export const formButton = buttonText => (
  <Form.Item>
    <Button
      data-test="submit-button"
      type="primary"
      htmlType="submit"
      className="login-form-button"
      block
    >
      {buttonText}
    </Button>
  </Form.Item>
);
