import React from 'react';
import { Form, Icon, Input, Button } from 'antd';

export const formItem = (form, dataTest, label,
  fieldDecorator, iconType, inputType, placeHolder) => (
    <Form.Item data-test={dataTest} label={label}>
      {form.getFieldDecorator(fieldDecorator, {
        rules: [{ required: true, message: 'This field is required' }],
      })(
        <Input
          prefix={<Icon type={iconType} style={{ color: 'rgba(0,0,0,.25)' }} />}
          type={inputType}
          placeholder={placeHolder}
        />,
      )}
    </Form.Item>
);

export const formButton = buttonText => (
  <Form.Item>
    <Button
      type="primary"
      htmlType="submit"
      className="login-form-button"
      block
    >
      {buttonText}
    </Button>
  </Form.Item>
);
