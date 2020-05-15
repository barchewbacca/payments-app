import * as React from 'react';
import cx from 'classnames';
import Box from 'components/Box';
import styles from './styles.module.scss';
import { Payment, Refund } from 'ts-models';
import PaymentMethodIcon from 'components/PaymentMethodIcon';
import { getCurrencySymbol, getFormattedTimestamp } from 'utils';
import StatusPill from 'components/StatusPill';
import { Link } from 'react-router-dom';

interface TableProps {
  data: (Payment | Refund)[];
  type: 'payments' | 'refunds';
}

interface TableRowProps {
  key: string;
  item: Payment | Refund;
  type: 'payments' | 'refunds';
}

const Table = ({ data, type }: TableProps) => (
  <Box noPadding>
    <div className={cx(styles.table, styles[type])}>
      <TableHead />
      <TableBody data={data} type={type} />
    </div>
  </Box>
);

const TableHead = () => (
  <div className={`${styles.item} ${styles.head}`}>
    <div className={styles.extra}>
      <div className={styles.description}>Details</div>
      <div className={styles.timestamp}>Date</div>
    </div>
    <div className={styles.core}>
      <div className={styles.amount}>Amount</div>
      <div className={styles.status}>Status</div>
    </div>
  </div>
);

const TableBody = ({ data, type }: TableProps) => (
  <>
    {data.map(item => (
      <TableRow key={item.id} item={item} type={type} />
    ))}
  </>
);

const TableRow = ({ item, type }: TableRowProps) => {
  if (type === 'payments') {
    return (
      <Link
        to={`/payments/${item.id}`}
        className={styles.item}
        data-testid="table-row"
      >
        <RowData item={item} />
      </Link>
    );
  } else {
    return (
      <div className={styles.item}>
        <RowData item={item} />
      </div>
    );
  }
};

const RowData = ({ item }: any) => (
  <>
    <PaymentMethodIcon id={item.method} />
    <div className={styles.extra}>
      <div className={styles.description}>{item.description}</div>
      <div className={styles.timestamp}>
        {getFormattedTimestamp(item.createdAt)}
      </div>
    </div>
    <div className={styles.core}>
      <div className={styles.amount}>
        {getCurrencySymbol(item.amount.currency)} {item.amount.value}
      </div>
      <div className={styles.status}>
        <StatusPill status={item.status} />
      </div>
    </div>
  </>
);

export default Table;
