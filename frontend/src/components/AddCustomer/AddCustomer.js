
import Layout from '../../layout/layout'
import CommonInput from '../common/CommonInput/CommonInput'
import img from '../../Assets/Remote meeting-pana.png'
import React, { useEffect, useState } from 'react';
import { Cloudinary } from 'cloudinary-core';
import axios from "axios"
import { Circles } from "react-loader-spinner";
import '../../App.css'



export const AddCustomer = () => {


  const [inputs, setInputs] = useState({});
  const [loading, setLoading] = useState(false);

  const [paserrors, setPasErrors] = useState(null);
  const [conpaserrors, setconPasErrors] = useState(null);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  };

  useEffect(() => {
    setTimeout(() => {
      setPasErrors(null)
      setconPasErrors(null)
    }, 1000)
  }, [paserrors, conpaserrors])


  const handleSubmit = async (event) => {
   
    event.preventDefault();
    const passwordValid = passwordValidate(inputs.password, inputs.con_password)
    if (passwordValid) {
      setLoading(true)
      const agreementfile = event.target.elements.agreement.files[0];
      const profilePicturefile = event.target.elements.profilePicture.files[0];
      const agreementpicId = await handleUpload(agreementfile);
      const profilepicId = await handleUpload(profilePicturefile);
      console.warn(agreementpicId)
      register(agreementpicId, profilepicId);

    }

    else {
      alert("Password does not meet the criteria or does not match")
    }

  };

  const register = (agreementpicId, profilepicId) => {
    if (agreementpicId != false && profilepicId != false) {
      axios.post("http://127.0.0.1:8000/user/", {
        user: {
          first_name: inputs.fname,
          last_name: inputs.lname,
          username: inputs.Uname,
          email: inputs.email,
          password: inputs.password
        },
        customer: {
          country: inputs.country,
          short_description: inputs.shortDescription,
          profile_picture: profilepicId,
          agreements: agreementpicId
        }
      })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            alert("Customer successfully added!!");
            setLoading(false)
          } else {
            console.log(response);
            setLoading(false)
          }
        })
        .catch((error) => {
          console.error("Error occurred:", error);
          setLoading(false)
          alert("An error occurred. Please try again later.");
        });

    };
  }

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



  const passwordValidate = (password, conPassword) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/;
    const isconpassword = password === conPassword
    const isValidPassword = passwordRegex.test(password);
    if (!isValidPassword) {
      setPasErrors("Password do not match or do not meet the criteria")
      return false
    } else if (!isconpassword) {
      setconPasErrors("password matched")
      return false
    } else {
      return true
    }


  };

  return (
    <>
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
                    Label={'password'}
                    Name={'password'}
                    PlaceHolder={'Enter your password'}
                    Type={"password"}
                    Onchange={handleChange}
                  />
                  <p className='text-danger'>{paserrors}</p>
                </div>
                <div className='row mt-4'>

                  <CommonInput
                    Label={'Confirm password'}
                    Name={'con_password'}
                    PlaceHolder={'Confirm your password'}
                    Type={"password"}
                    Onchange={handleChange}
                  />
                  <p className='text-danger'>{conpaserrors}</p>
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
      {loading ? (
        <div className="loader-overlay">
          <div className="loader">
            <Circles
              height="80"
              width="80"
              color="#2c9ce7"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        </div>

      ) : null}


    </>
  )
}


export default AddCustomer;