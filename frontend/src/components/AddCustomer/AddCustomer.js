
import Layout from '../../layout/layout'
import CommonInput from '../common/CommonInput/CommonInput'
import img from '../../Assets/Remote meeting-pana.png'
import React, { useState } from 'react';
import { Cloudinary } from 'cloudinary-core';


export const AddCustomer = () => {


  const [inputs, setInputs] = useState({});

  const [errors, setErrors] = useState(null);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs.agreement);
    const agreementfile = event.target.elements.agreement.files[0];
    const profilePicturefile = event.target.elements.profilePicture.files[0];
    const agreementpicId = handleUpload(agreementfile);
    const profilepicId = handleUpload(profilePicturefile);

  };

  const handleUpload = async (file) => {

    if (!file) return false;

    try {
      const cloudinary = new Cloudinary({ cloud_name: 'dcvaihbup' });
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'lry1mocw');

      const response = await fetch(`https://api.cloudinary.com/v1_1/dcvaihbup/image/upload`, {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Upload successful. Public ID:', data.public_id);
        return data.public_id;
      } else {
        console.error('Upload failed.');
        return false;
      }
    } catch (error) {
      console.error('Upload error:', error);
      return false;
    }
  };



  const isValidEmail = (email) => {
    // Basic email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <Layout>

      <div className='container-fluid p-5 pt-2' style={{ color: 'gray' }}>
        <h5>Add Customer</h5>
        <div className='row addCustomer-container'>

          <div className='col-md-5 d-flex align-items-center justify-content-center' >
            <img className={"w-100 d-none d-md-block"} src={img} alt="" />
          </div>
          <div className='col-md p-3 mt-1'>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className='col-sm-6 mt-4'>
                  <CommonInput
                    Label={'First Name'}
                    Name={'fname'}
                    PlaceHolder={'Enter your first name'}
                    Onchange={handleChange}


                  />
                </div>

                <div className='col-sm-6 mt-4'>
                  <CommonInput
                    Label={'Last Name'}
                    Name={'lname'}
                    PlaceHolder={'Enter your last name'}
                    Onchange={handleChange}
                  />
                </div>

              </div>

              <div className="row mt-4">
                <div className='col-sm-6 mt-4'>
                  <CommonInput
                    Label={'User Name'}
                    Name={'Uname'}
                    PlaceHolder={'Enter your User name'}
                    Onchange={handleChange}
                  />
                </div>

                <div className='col-sm-6 mt-4'>
                  <CommonInput
                    Label={'Country'}
                    Name={'country'}
                    PlaceHolder={'Enter your country'}
                    Onchange={handleChange}
                  />
                </div>
              </div>
              <div className='row mt-4'>

                <CommonInput
                  Label={'Email'}
                  Name={'email'}
                  PlaceHolder={'mymail@gmail.com'}
                  Onchange={handleChange}
                />

              </div>
              <div className='row mt-4'>

                <CommonInput
                  Label={'Short Description'}
                  Name={'shortDescription'}
                  PlaceHolder={'Enter your words'}
                  TextArea={true}
                  Onchange={handleChange}
                />

              </div>
              <div className='row mt-4'>
                <CommonInput
                  Label={'Profile picture'}
                  Name={'profilePicture'}
                  Type={"file"}
                  Onchange={handleChange}
                  id={'profilePicture'}
                />

              </div>
              <div className='row mt-4'>

                <CommonInput
                  Label={'Upload Agreements'}
                  Name={"agreement"}
                  Type={"file"}
                  Onchange={handleChange}
                  id={"agreement"}
                />

              </div>

              <div className='row mt-4 mb-5'>
                <button type="submit" className="btn add-customer-button" style={{ width: 'auto' }}>Add Customer</button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </Layout>
  )
}


export default AddCustomer;