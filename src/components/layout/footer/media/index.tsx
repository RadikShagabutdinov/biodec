import * as React from 'react';
import cx from 'classnames';
import styles from './media.module.css';

function Media() {
  return (
    <ul className={styles.container}>
      <li className={styles.item}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className={cx(styles.link, styles.vk)}
        >
          <span hidden>В контакте</span>
        </a>
      </li>
      <li className={styles.item}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className={cx(styles.link, styles.fb)}
        >
          <span hidden>Facebook</span>
        </a>
      </li>
      <li className={styles.item}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className={cx(styles.link, styles.tw)}
        >
          <span hidden>Twitter</span>
        </a>
      </li>
    </ul>
  );
}

export default Media;
