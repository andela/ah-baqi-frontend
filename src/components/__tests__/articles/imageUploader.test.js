import React from 'react';
import { shallow } from 'enzyme';
import Dropzone from 'react-dropzone';

import ImageUploader from '../../articles/singlearticle/imageUpload';

const mockFn = jest.fn();
const props = {
  handleChange: mockFn,
  image: 'my_image_url',
  imageUrl: '',
  imageUpload: mockFn,
};

const getRootProps = () => props;
const getInputProps = mockFn;

describe('<IconText /> component', () => {
  const wrapper = shallow(<ImageUploader {...props} />);

  test('should test that ImageUploader component renders', () => {
    expect(wrapper.length).toEqual(1);
  });

  test('should test that Dropzone drag and drop renders', () => {
    const dropzone = wrapper.find(Dropzone);
    expect(dropzone.length).toEqual(1);
    dropzone.props().onDrop();
    expect(mockFn).toHaveBeenCalled();
    dropzone.props().children({ getRootProps, getInputProps });
    expect(mockFn).toHaveBeenCalled();
  });
});
