import { message } from 'antd';

const handleMessages = (status = 'loading', content = 'Loading') => {
  message.destroy();
  switch (status) {
    case 'success':
      message.success(content, 2.5);
      break;
    case 'error':
      message.error(content, 2.5);
      break;
    default:
      message.loading(content, 20);
  }
};

export default handleMessages;
