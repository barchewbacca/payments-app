import React from 'react';
import Table from 'components/Table';
import { Refund } from 'ts-models/Refund';

interface Props {
  refunds: Refund[];
}

const Refunds = ({ refunds }: Props) => {
  if (!refunds.length) {
    return null;
  }

  return (
    <>
      <h2>Refunds</h2>
      {/* <Table /> */}
    </>
  );
};

export default Refunds;
