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
      <li className={styles.item}>
        <div
          style={{
            width: '1%',
          }}
        ></div>
        <div
          style={{
            width: '120px',
            textAlign: 'right',
          }}
        >
          Amount
        </div>
        <div>Status</div>
        <div>Details</div>
        <div
          style={{
            width: '1%',
            whiteSpace: 'nowrap',
          }}
        >
          Date
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
    <div className={styles.method}>
      <PaymentMethodIcon id={item.method} />
    </div>
    <div
      style={{
        textAlign: 'right',
      }}
    >
      {getCurrencySymbol(item.amount.currency)} {item.amount.value}
    </div>
    <div>
      <StatusPill status={item.status} />
    </div>
    <div>{item.description}</div>
    <div
      style={{
        whiteSpace: 'nowrap',
      }}
    >
      {getFormattedTimestamp(item.createdAt)}
    </div>
  </li>
);

export default Table;
