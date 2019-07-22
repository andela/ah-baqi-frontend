import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon } from 'antd';
import { bindActionCreators } from 'redux';
import EditProfileForm from '../../components/profile/forms/EditProfileForm';

import { editUserProfile } from '../../actions/profileActions';
import { displayModalActions, hideModalActions } from '../../actions/modalActions';

export class UnconnectedEditProfile extends React.Component {
  showModal = () => {
    const { displayModalActions } = this.props; // eslint-disable-line
    displayModalActions();
  };

  handleCancel = () => {
    const { hideModalActions } = this.props; // eslint-disable-line
    hideModalActions();
  };

  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) return;
      const { editUserProfile } = this.props; // eslint-disable-line
      const username = localStorage.getItem('username');
      editUserProfile(username, values);
      form.resetFields();
      this.handleCancel();
    });
  };

  saveFormRef = (formRef) => {
    this.formRef = formRef;
  };

  render() {
    const {
      myProfile,
    } = this.props;
    const {
      visible,
    } = this.props;
    return (
      <div data-test="edit-logic">
        <Button
          data-test="submit-button"
          onClick={this.showModal}
        >
          Edit Profile
          <Icon type="edit" />
        </Button>
        <EditProfileForm
          data-test="edit-form"
          currentProfile={myProfile}
          wrappedComponentRef={this.saveFormRef}
          visible={visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ userProfile, modals }) => ({
  editItems: userProfile,
  visible: modals.visible,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  editUserProfile,
  displayModalActions,
  hideModalActions,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UnconnectedEditProfile);
