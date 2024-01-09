import React from 'react'
import Layout from '../../layout/layout'
import CommonInput from '../common/CommonInput/CommonInput'
import img from '../../Assets/Remote meeting-pana.png'


export const AddCustomer = () => {
  return (
    <Layout>

      <div className='container-fluid p-5 pt-2' style={{color:'gray'}}>
        <h5>Add Customer</h5>
        <div className='row addCustomer-container'>
      
        <div className='col-md-5 d-flex align-items-center justify-content-center' >
          <img className={"w-100 d-none d-md-block"} src={img} alt="" />
          </div>
          <div className='col-md p-3 mt-1'>

            <div className="row">
              <div className='col-sm-6 mt-4'>
                <CommonInput
                  Label={'First Name'}
                  Name={'fname'}
                  PlaceHolder={'Enter your first name'}

                />
              </div>

              <div className='col-sm-6 mt-4'>
                <CommonInput
                  Label={'Last Name'}
                  Name={'lname'}
                  PlaceHolder={'Enter your last name'}

                />
              </div>

            </div>

            <div className="row mt-4">
              <div className='col-sm-6 mt-4'>
                <CommonInput
                  Label={'User Name'}
                  Name={'Uname'}
                  PlaceHolder={'Enter your User name'}

                />
              </div>

              <div className='col-sm-6 mt-4'>
                <CommonInput
                  Label={'Country'}
                  Name={'country'}
                  PlaceHolder={'Enter your country'}

                />
              </div>
            </div>
            <div className='row mt-4'>

              <CommonInput
                Label={'Email'}
                Name={'email'}
                PlaceHolder={'mymail@gmail.com'}

              />

            </div>
            <div className='row mt-4'>

              <CommonInput
                Label={'Short Description'}
                Name={'shortDescription'}
                PlaceHolder={'Enter your words'}
                TextArea={true}

              />

            </div>
            <div className='row mt-4'>
              <CommonInput
                Label={'Profile picture'}
                Name={'profilePicture'}
                Type={"file"}

              />

            </div>
            <div className='row mt-4'>

              <CommonInput
                Label={'Upload Agreements'}
                Name={'upload'}
                Type={"file"}

              />

            </div>

            <div className='row mt-4 mb-5'>
            <button type="button" className="btn add-customer-button" style={{width:'auto'}}>Add Customer</button>
            </div>
          </div>

        </div>

      </div>
    </Layout>
  )
}