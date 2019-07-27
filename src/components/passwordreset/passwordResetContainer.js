import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form } from 'antd';
import { resetPasswordActions } from '../../actions/passwordResetActions';
import { formItem, formButton } from '../../utils/formElements';

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
    };

  handleSubmit = (e) => {
    e.preventDefault();
    const { passwordLink } = this.state;
    const { resetPasswordActions } = this.props; // eslint-disable-line
    resetPasswordActions(passwordLink);
  };

  render() {
    const { form } = this.props;
    return (
      <Form onSubmit={this.handleSubmit} className="reset-form" style={{ textAlign: 'left' }}>
        <div>
          <h1>Forgot Password</h1>
        </div>
        {formItem(form, 'email', 'Email', 'email',
          'user', 'email', 'johndoe@example.com', '',
          false, 'email', this.handleChange)}
        <div>
          {formButton('Send Reset Password Email')}
          <Link to="/">
            Go Back Home
          </Link>
        </div>
      </Form>
    );
  }
}

export default connect(null, { resetPasswordActions })(Form.create()(PasswordReset));
