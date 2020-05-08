import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const Header = ({ description, amount }) => (
  <>
    <p>
      <Link to="/payments">‹ Overview</Link>
    </p>
    <h1 className={styles.description}>{description}</h1>
    <p className={styles.amount}>
      {amount.currency} {amount.value}
    </p>
  </>
);

export default Header;
