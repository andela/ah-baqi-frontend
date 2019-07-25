import React from 'react';
import {
  Modal, Form, Input,
} from 'antd';
import './edit.scss';

const EditProfileForm = Form.create({ name: 'form_in_modal' })(
  class extends React.Component {
    renderFormInfo = (props, getFieldDecorator) => {
      const {
        image,
        first_name, // eslint-disable-line
        last_name, // eslint-disable-line
        username,
        email,
        country,
        bio,
      } = props.profile;


      return (
        <Form layout="vertical">
          <Form.Item label="Profile Picture">
            <div className="modal-image">
              <img
                src={image}
                alt="myprofile"
              />
            </div>
            <br />
            {getFieldDecorator('image', { initialValue: `${image}` })(<Input type="text" />)}
          </Form.Item>
          <Form.Item label="First Name">
            {getFieldDecorator('first_name', { initialValue: `${first_name ? first_name : 'Name'}` })(<Input type="text" />)} {/*eslint-disable-line */}
          </Form.Item>
          <Form.Item label="Last Name">
            {getFieldDecorator('last_name', { initialValue: `${last_name ? last_name : 'Name'}` })(<Input type="text" />)} {/*eslint-disable-line */}
          </Form.Item>
          <Form.Item label="Username">
            {getFieldDecorator('username', { initialValue: `${username}` })(<Input type="text" />)}
          </Form.Item>
          <Form.Item label="Email">
            {getFieldDecorator('email', { initialValue: `${email}` })(<Input type="text" />)}
          </Form.Item>
          <Form.Item label="Country">
            {getFieldDecorator('country', { initialValue: `${country}` })(<Input type="text" />)}
          </Form.Item>
          <Form.Item label="Bio">
            {getFieldDecorator('bio', { initialValue: `${bio}` })(<Input type="textarea" />)}
          </Form.Item>
        </Form>
      );
    }

    renderForm = () => {
      const { form, currentProfile } = this.props;
      const { getFieldDecorator } = form;

      return (
        currentProfile ? this.renderFormInfo(currentProfile, getFieldDecorator) : null
      );
    }

    render() {
      const { visible, onCancel, onCreate } = this.props;
      return (
        <div data-test="edit-profile-overview">
          <Modal
            visible={visible}
            title="Edit Profile"
            okText="Update Profile"
            onCancel={onCancel}
            onOk={onCreate}
          >
            {this.renderForm()}
          </Modal>
        </div>
      );
    }
  },
);

export default EditProfileForm;
