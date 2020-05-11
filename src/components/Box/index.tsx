import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

interface Props {
  children: React.ReactNode;
  noPadding?: boolean;
}

const Box = ({ children, noPadding }: Props) => (
  <div className={cx(styles.box, { [styles.noPadding]: noPadding })}>
    {children}
  </div>
);

export default Box;
