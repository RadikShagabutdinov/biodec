import * as React from 'react';
import Header from './header';
import Footer from './footer';
import styles from './layout.module.css';
import "./layout.css"

interface Props {
  children: React.ReactNode,
}

function Layout({ children }: Props) {
  return (
    <React.Fragment>
      <div className={styles.content}>
        <Header />
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
