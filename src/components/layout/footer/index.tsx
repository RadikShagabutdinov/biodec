import * as React from 'react';
import cx from 'classnames';
import Media from './media';
import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={cx('inner', styles.inner)}>
        <Media />
        <div className={styles.bottom}>
          <div className={styles.copy}>&copy; ООО &laquo;Биодек&raquo;, {new Date().getFullYear()}</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
