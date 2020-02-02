import * as React from 'react';
import { Link } from 'gatsby';
import styles from './nav.module.css';

function Nav() {
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link className={styles.link} activeClassName={styles.active} to="/about">О нас</Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} activeClassName={styles.active} to="/product">продукты</Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} activeClassName={styles.active} to="/papers">документы</Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} activeClassName={styles.active} to="/faq">FAQ</Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} activeClassName={styles.active} to="/contacts">контакты</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
