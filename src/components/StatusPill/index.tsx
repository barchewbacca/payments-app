import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

interface Props {
  status: string;
}

const StatusPill = ({ status }: Props) => (
  <span className={cx(styles.pill, { [styles[status]]: status })}>
    {status}
  </span>
);

export default StatusPill;
