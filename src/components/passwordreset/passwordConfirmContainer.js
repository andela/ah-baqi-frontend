import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form } from 'antd';
import { resetConfirmActions } from '../../actions/passwordConfirmActions';
import { formItem, formButton } from '../../utils/formElements';

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
      <Form
        onSubmit={this.handleSubmit}
        className="reset-form"
        data-test="reset-form-cont"
        style={{ textAlign: 'left' }}
      >
        <div>
          <h1>Create your new password</h1>
        </div>
        {formItem(form, 'reset-form-cont-password', 'Password', 'password',
          'lock', 'password', '*****', this.validateToNextPassword,
          true, 'password', this.handleChange)}
        {formItem(form, 'reset-form-cont-reset-password', 'Confirm Password', 'confirm_password',
          'lock', 'password', '*****', this.compareToFirstPassword,
          true, 'confirm_password', this.handleChange)}
        {formButton('Reset Password')}
      </Form>
    );
  }
}

export default connect(null, { resetConfirmActions })(Form.create()(withRouter(ResetConfirm)));
