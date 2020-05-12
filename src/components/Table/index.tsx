import * as React from 'react';
import Box from 'components/Box';
import styles from './styles.module.scss';
import { Payment } from 'ts-models/Payment';
import PaymentMethodIcon from 'components/PaymentMethodIcon';
import { getCurrencySymbol, getFormattedTimestamp } from 'utils';
import StatusPill from 'components/StatusPill';

interface TableProps {
  data: Payment[];
}

interface ListItemProps {
  key: string;
  item: Payment;
}

const Table = ({ data }: TableProps) => (
  <Box noPadding>
    <ul className={styles.list}>
      <li className={`${styles.item} ${styles.head}`}>
        <div className={styles.placeholder}></div>
        <div className={styles.extra}>
          <div className={styles.description}>Details</div>
          <div className={styles.timestamp}>Date</div>
        </div>
        <div className={styles.core}>
          <div className={styles.amount}>Amount</div>
          <div className={styles.status}>Status</div>
        </div>
      </li>
      {data.map(item => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  </Box>
);

const ListItem = ({ item }: ListItemProps) => (
  <li className={styles.item}>
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
  </li>
);

export default Table;
