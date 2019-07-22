import axios from 'axios';
import handleMessages from './messages';

const cloudinaryAPIKey = 896213827437316;

const imageUploader = (images, imageUrl, changeMethod) => {
  let image = images[0]; // eslint-disable-line
  const reader = new FileReader();
  reader.onloadend = () => {
    image = reader.result;
  };
  reader.readAsArrayBuffer(image);
  const formData = new FormData();
  formData.append('file', image);
  formData.append('api_key', cloudinaryAPIKey);
  formData.append('upload_preset', 'dvyip3rs');
  formData.append('timestamp', (Date.now() / 1000));
  handleMessages('loading', 'your image is being uploaded... ');
  return axios.post(
    'https://api.cloudinary.com/v1_1/kwangonya/image/upload',
    formData,
    { headers: { 'X-Requested-With': 'XMLHttpRequest' } },
  )
    .then((response) => {
      imageUrl = response.data.url; // eslint-disable-line
      changeMethod(imageUrl, 'image');
      handleMessages('success', 'Image was uploaded successfully 🤪');
    })
    .catch(() => handleMessages('error', 'Failed to upload the image. 😔'));
};


export default imageUploader;
