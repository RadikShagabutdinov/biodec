import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import cx from 'classnames';
import Nav from './nav';
import styles from './header.module.css';

function Header() {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: {eq: "logo.svg"}) {
        childImageSharp {
          fluid {
            tracedSVG
            src
            sizes
          }
        }
        publicURL
      }
    }
  `);
  return (
    <header className={styles.container}>
      <div className={cx('inner' ,styles.inner)}>
        <div className={styles.company}>  
          <Link to="/" className={styles.link}>
            <img src={data.logo.publicURL} className={styles.logo} alt="Biodec" />
          </Link>
          <p className={styles.slogan}>Экономия для экологии</p>
        </div>
        <div className={styles.conetent}>
          <div className={styles.top} />
          <Nav />
        </div>
      </div>
    </header>
  )
}

export default Header;