import React from 'react';
import Dropzone from 'react-dropzone';
import { Icon } from 'antd';

const ImageUploader = ({
  image, handleChange, imageUrl, imageUpload,
}) => (
  <div
    className="input-group"
    data-test="image drop"
  >
    <Dropzone
      onDrop={acceptedFile => imageUpload(acceptedFile, imageUrl, handleChange)}
      accept="image/*"
    >
      {({ getRootProps, getInputProps }) => (
        <section data-test="dropzone section">
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {image || (
              <p>
                <Icon
                  type="file-image"
                  className="uploader-icon"
                />
                Drag &apos; n &apos; drop image here, or click to select image
              </p>
            )}
          </div>
        </section>
      )}
    </Dropzone>
    <div className="show-thumb">
      {image ? (
        <span className="success-text">
          <Icon type="check-circle" />
          {' '}
          Image successfully uploaded
        </span>
      ) : 'No image Selected Yet'}
    </div>
  </div>
);

export default ImageUploader;
