import React, { useState } from 'react';
import PaymentMethodIcon from 'components/PaymentMethodIcon';
import Box from 'components/Box';
import CustomerModal from 'components/CustomerModal';
import { getPaymentMethodName } from 'utils';
import styles from './styles.module.scss';
import { Payment } from 'ts-models/Payment';
import { Customer } from 'ts-models/Customer';

interface Props {
  payment: Payment;
  customer: Customer;
}

const Details = ({ payment, customer }: Props) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Box>
      <dl className={styles.details}>
        <dt>Created at</dt>
        <dd>{payment.createdAt}</dd>
        <dt>Status</dt>
        <dd>{payment.status}</dd>
        <dt>Method</dt>
        <dd>
          <PaymentMethodIcon id={payment.method} />{' '}
          {getPaymentMethodName(payment.method)}
        </dd>
        <dt>Customer</dt>
        <dd>
          {customer.name}
          <button className={styles.customerLink} onClick={() => setOpen(true)}>
            View details
          </button>
        </dd>
      </dl>
      <CustomerModal
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        contentLabel={`Details for ${customer.name}`}
        customer={customer}
      />
    </Box>
  );
};

export default Details;
