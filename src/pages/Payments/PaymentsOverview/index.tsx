import React, { useEffect, useState } from 'react';
import Table from 'components/Table';
import api from 'services/api';
import { Payment } from 'ts-models/Payment';
import styles from './styles.module.scss';

interface State {
  data: Payment[];
}

const initialState: State = { data: [] };

const Overview = () => {
  const [{ data }, setState] = useState(initialState);

  useEffect(() => {
    api
      .get('/api/payments', {})
      .then(res => res.json())
      .then(data => setState(() => ({ data })))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <h1 className={styles.title}>Payments</h1>
      <Table data={data} />
    </>
  );
};

export default Overview;
