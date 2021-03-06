import React from 'react';
import Table from 'components/Table';
import { Refund } from 'ts-models';

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
      <Table data={refunds} type="refunds" />
    </>
  );
};

export default Refunds;
