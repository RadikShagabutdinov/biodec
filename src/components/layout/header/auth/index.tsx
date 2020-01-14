import * as React from 'react';
import styles from './auth.module.css';
import { Link } from 'gatsby';

function Auth() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.fieldWrapper}>
          <input name="email" type="text" className={styles.field} placeholder="E-mail" />
        </div>
        <div className={styles.fieldWrapper}>
          <input name="password" type="password" className={styles.field} placeholder="Пароль" />
        </div>
        <button type="submit" className={styles.btn}>Войти</button>
        <Link to="/signup" className={styles.link}>Зарегистрироваться</Link>
      </form>
    </div>
  )
}

export default Auth;
