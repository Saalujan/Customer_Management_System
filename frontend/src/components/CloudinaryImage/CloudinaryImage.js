import React, { Component } from 'react';
import cloudinary from 'cloudinary-core';

class CloudinaryImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: ''
    };
  }

  componentDidMount() {
    const { publicId } = this.props;
    const cloudinaryInstance = new cloudinary.Cloudinary({ cloud_name: 'dcvaihbup' }); // Replace 'YOUR_CLOUD_NAME' with your Cloudinary cloud name
    const imageUrl = cloudinaryInstance.url(publicId);
    this.setState({ imageUrl });
  }

  render() {
    const { imageUrl } = this.state;

    return (
      <div>
        {imageUrl && <img src={imageUrl} alt="Cloudinary Image" />}
      </div>
    );
  }
}

export default CloudinaryImage;
