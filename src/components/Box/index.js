import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

const Box = ({ children, noPadding }) => (
  <div className={cx(styles.box, { [styles.noPadding]: noPadding })}>
    {children}
  </div>
);

export default Box;
