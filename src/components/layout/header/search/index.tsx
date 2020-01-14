import * as React from 'react';
import styles from './search.module.css';

function Search() {
  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <div className={styles.fieldWrapper}>
          <input type="text" className={styles.field} />
        </div>
        <button type="submit" className={styles.btn} />
      </form>
    </div>
  )
}

export default Search;
