import React, { useEffect } from 'react';
import Table from 'components/Table';
import { Payment } from 'ts-models';
import styles from './styles.module.scss';
import Box from 'components/Box';

interface Props {
  payments: Payment[];
  error: any;
  fetchPayments: () => void;
}

const Overview = ({ payments, error, fetchPayments }: Props) => {
  useEffect(() => {
    fetchPayments();
  }, [fetchPayments]);

  return (
    <>
      <h1 className={styles.title}>Payments</h1>
      {error && <Box>{error.toString()}</Box>}
      <Table data={payments} type="payments" />
    </>
  );
};

export default Overview;
