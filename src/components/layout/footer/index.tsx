import * as React from 'react';
import Media from './media';
import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.inner}>
        <Media />
        <div className={styles.bottom}>
          <div className={styles.copy}>&copy; ООО &laquo;Биодек&raquo;, {new Date().getFullYear()}</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
