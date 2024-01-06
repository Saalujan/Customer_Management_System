import React from 'react'
import Layout from '../../layout/layout'

export const AddCustomer = () => {
  return (
    <Layout>
      <div className="d-flex mb-4 Category-AddedSection">
        <div className="col-6">
          <h5>Add Customer</h5>
        </div>
      </div>
      <div className='row mb-2'>
        <div className='col-3'>
        </div>

        <div className='col'>
          <div className="container mb-2 AddCustomer-Form-section">
            <div className="row mb-2">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="form-outline mb-2">
                  <label className="form-label" htmlFor="inputAddAttribute-value">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="inputAddAttribute-value"
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="form-outline mb-2">
                  <label className="form-label" htmlFor="inputAddAttribute-value">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="inputAddAttribute-value"
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="form-outline mb-2">
                    <label className="form-label" htmlFor="inputAddAttribute-value">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="inputAddAttribute-value"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}