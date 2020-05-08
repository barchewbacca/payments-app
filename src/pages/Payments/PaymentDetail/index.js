import React from 'react';
import Details from './Details';
import Header from './Header';
import Refunds from './Refunds';

const PaymentDetail = ({ payment, customer, refunds }) => (
  <>
    <Header {...payment} />
    <Details payment={payment} customer={customer} />
    <Refunds refunds={refunds} />
  </>
);

export default PaymentDetail;
