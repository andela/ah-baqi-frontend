import React from 'react';
import { Modal, Form } from 'antd';
import './edit.scss';
import { formItem } from '../../../utils/formElements';

// const EditProfileForm = Form.create({ name: 'form_in_modal' })(
class EditProfileForm extends React.Component {
    renderFormInfo = (props, form) => {
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
          <div className="modal-image">
            <img
              src={image}
              alt="myprofile"
            />
          </div>
          {formItem(form, '', 'Profile Picture',
            'image', '', 'text', '',
            null, false, '', '', image, false)}
          {formItem(form, '', 'First Name',
            'first_name', '', 'text', 'Name',
            null, false, '', '', first_name, false)}
          {formItem(form, '', 'Last Name',
            'last_name', '', 'text', 'Name',
            null, false, '', '', last_name, false)}
          {formItem(form, '', 'Username',
            'username', '', 'text', '',
            null, false, '', '', username)}
          {formItem(form, '', 'Email',
            'email', '', 'email', '',
            null, false, '', '', email)}
          {formItem(form, '', 'Country',
            'country', '', 'text', '',
            null, false, '', '', country, false)}
          {formItem(form, '', 'Bio',
            'bio', '', 'textarea', '',
            null, false, '', '', bio, false)}
        </Form>
      );
    };

    renderForm = () => {
      const { form, currentProfile } = this.props;

      return (
        currentProfile ? this.renderFormInfo(currentProfile, form) : null
      );
    };

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
}

export default Form.create()(EditProfileForm);
