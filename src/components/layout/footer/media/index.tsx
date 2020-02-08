import * as React from 'react';
import cx from 'classnames';
import styles from './media.module.css';

function Media() {
  return (
    <div className={styles.container}>
      <p className={styles.captopn}>Присоединяйтесь к нам в<br/> социальных сетях</p>
      <ul className={styles.list}>
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
        <li className={styles.item}>
          <a
            href="https://www.facebook.com/biodecltd"
            target="_blank"
            rel="noopener noreferrer"
            className={cx(styles.link, styles.li)}
          >
            <span hidden>Linkedin</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Media;
