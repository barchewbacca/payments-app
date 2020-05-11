import React from 'react';
import Details from './Details';
import Header from './Header';
import Refunds from './Refunds';
import { Payment } from 'ts-models/Payment';
import { Customer } from 'ts-models/Customer';
import { Refund } from 'ts-models/Refund';

interface Props {
  payment: Payment;
  customer: Customer;
  refunds: Refund[];
}

const PaymentDetail = ({ payment, customer, refunds }: Props) => (
  <>
    <Header {...payment} />
    <Details payment={payment} customer={customer} />
    <Refunds refunds={refunds} />
  </>
);

export default PaymentDetail;
