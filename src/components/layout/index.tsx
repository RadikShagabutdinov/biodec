import * as React from 'react';
import SEO from '../seo';
import Header from './header';
import Footer from './footer';

import styles from './layout.module.css';
import "./layout.css"

interface Props {
  children: React.ReactNode,
  title: string;
}

function Layout({ children, title }: Props) {
  return (
    <React.Fragment>
      <SEO title={title} />
      <div className={styles.content}>
        <Header />
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
