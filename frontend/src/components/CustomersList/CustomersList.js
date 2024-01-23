import Layout from '../../layout/layout'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomerTable.css';

import CustomerTable from './CustomerTable';

export const CustomersList = () => {
  return (
    <Layout>
        <CustomerTable />
    </Layout>
  )
}