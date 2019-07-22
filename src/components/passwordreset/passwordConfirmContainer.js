import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { resetConfirmActions } from '../../actions/passwordConfirmActions';


class ResetConfirm extends Component {
  state = {
    resetPassword: {
      password: '',
      confirm_password: '',
    },
    token: '',
  };

  handleChange = (e) => {
    const { match } = this.props;
    const { name, value } = e.target;
    const { resetPassword } = this.state;
    resetPassword[name] = value;
    this.setState({ resetPassword, token: match.params.token });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { resetPassword, token } = this.state;
    const { resetConfirmActions } = this.props; // eslint-disable-line
    resetConfirmActions({ resetPassword, token });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('The passwords do not match!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    const { confirmDirty } = this.state;
    if (value && confirmDirty) {
      form.validateFields(['confirm_password'], { force: true });
    }
    callback();
  };

  render() {
    const { form } = this.props;
    return (
      <Form onSubmit={this.handleSubmit} className="reset-form" style={{ textAlign: 'left' }}>
        <div>
          <h1>Create your new password</h1>
        </div>
        <Form.Item className="reset-label" hasFeedback label="Password">
          {form.getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                validator: this.validateToNextPassword,
              },
            ],
          })(<Input.Password type="input" name="password" onChange={this.handleChange} />)}
        </Form.Item>
        <Form.Item className="reset-label" hasFeedback label="Confirm Password">
          {form.getFieldDecorator('confirm_password', {
            rules: [
              {
                required: true,
                message: 'Please confirm your password!',
              },
              {
                validator: this.compareToFirstPassword,
              },
            ],
          })(<Input.Password name="confirm_password" onChange={this.handleChange} />)}
        </Form.Item>
        <div>
          <Button type="primary" htmlType="submit" className="login-form-button" block>
            Reset Password
          </Button>
        </div>
      </Form>
    );
  }
}

export default connect(null, { resetConfirmActions })(Form.create()(withRouter(ResetConfirm)));
