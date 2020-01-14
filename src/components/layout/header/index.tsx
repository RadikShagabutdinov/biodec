import * as React from 'react';
import { Link } from 'gatsby';
import Search from './search';
import Auth from './auth';
import Nav from './nav';

import styles from './header.module.css';
import logo from './logo.svg';

function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.inner}>
        <Link to="/" className={styles.link}>
          <img src={logo} className={styles.logo} alt="Biodec" />
        </Link>
        <div className={styles.conetent}>
          <div className={styles.top}>
            <Search />
            <Auth />
          </div>
          <Nav />
        </div>
      </div>
    </header>
  )
}

export default Header;