import React, { useState } from 'react';
import PaymentMethodIcon from 'components/PaymentMethodIcon';
import Box from 'components/Box';
import CustomerModal from 'components/CustomerModal';
import { getFormattedTimestamp, getPaymentMethodName } from 'utils';
import styles from './styles.module.scss';
import { Customer, Payment } from 'ts-models';
import StatusPill from 'components/StatusPill';

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
        <dd>{getFormattedTimestamp(payment.createdAt)}</dd>
        <dt>Status</dt>
        <dd>
          <StatusPill status={payment.status} />
        </dd>
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
