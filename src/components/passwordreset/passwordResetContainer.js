import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Form, Input, Button, Icon,
} from 'antd';
import { resetPasswordActions } from '../../actions/passwordResetActions';


class PasswordReset extends Component {
  state = {
    passwordLink: {
      email: '',
    },
  };

    handleChange = (e) => {
      const { name, value } = e.target;
      const { passwordLink } = this.state;
      passwordLink[name] = value;
      this.setState({ passwordLink });
    }

  handleSubmit = (e) => {
    e.preventDefault();
    const { passwordLink } = this.state;
    const { resetPasswordActions } = this.props; // eslint-disable-line
    resetPasswordActions(passwordLink);
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="reset-form" style={{ textAlign: 'left' }}>
        <div>
          <h1>Forgot Password</h1>
        </div>
        <Form.Item className="reset-label" label="Email">
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'Please enter a valid email',
            },
            {
              required: true, message: 'Please input your email',
            }],
          })(
            <Input
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Please enter your email "
              name="email"
              onChange={this.handleChange}
              required
            />,
          )}
        </Form.Item>
        <div>
          <Button type="primary" htmlType="submit" className="login-form-button" block>
              Find Account
          </Button>
          <br />
          <br />
          <Link to="/">
            <Button type="danger" className="cancel-reset-button login-form-button" block>
                Cancel
            </Button>
          </Link>
        </div>
      </Form>
    );
  }
}

PasswordReset.propTypes = {
  resetPasswordActions: PropTypes.func.isRequired,
};

export default connect(null, { resetPasswordActions })(Form.create()(PasswordReset));
