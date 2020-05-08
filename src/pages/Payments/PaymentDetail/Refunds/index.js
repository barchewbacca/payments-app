import React from 'react';
import Table from 'components/Table';

const Refunds = ({ refunds }) => {
  if (!refunds.length) {
    return null;
  }

  return (
    <>
      <h2>Refunds</h2>
      <Table />
    </>
  );
};

export default Refunds;
