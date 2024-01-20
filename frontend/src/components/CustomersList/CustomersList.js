import Layout from '../../layout/layout'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomerList.css';

import AppHeader from './header';
import AppCustomers from './customers';

export const CustomersList = () => {
  return (
    <Layout>
      <div className="App">
        <main>
          <div className="search-bar">
            <AppHeader />
          </div>
          <AppCustomers />
        </main>
      </div>
    </Layout>
  )
}