import * as React from 'react';
import cx from 'classnames';
import styles from './media.module.css';

function Media() {
  return (
    <ul className={styles.container}>
      <li className={styles.item}>
        <a
          href="https://www.facebook.com/biodecltd"
          target="_blank"
          rel="noopener noreferrer"
          className={cx(styles.link, styles.fb)}
        >
          <span hidden>Facebook</span>
        </a>
      </li>
    </ul>
  );
}

export default Media;
