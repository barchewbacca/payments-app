import React, { useEffect } from 'react';
import Details from './Details';
import Header from './Header';
import Refunds from './Refunds';
import { Customer, Payment, Refund } from 'ts-models';
import Box from 'components/Box';

interface Props {
  payment: Payment | undefined;
  customer: Customer | undefined;
  refunds: Refund[];
  error: any;
  fetchPayment: () => void;
  fetchRefunds: () => void;
}

const PaymentDetail = ({
  payment,
  customer,
  refunds,
  error,
  fetchPayment,
  fetchRefunds,
}: Props) => {
  useEffect(() => {
    if (!payment) {
      fetchPayment();
    }

    fetchRefunds();
    // eslint-disable-next-line
  }, [fetchPayment, fetchRefunds]);

  if (!payment || !customer) {
    return null;
  }

  return (
    <>
      <Header {...payment} />
      {error && <Box>{error.toString()}</Box>}
      <Details payment={payment} customer={customer} />
      <Refunds refunds={refunds} />
    </>
  );
};

export default PaymentDetail;
