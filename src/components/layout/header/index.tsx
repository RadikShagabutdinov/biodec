import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import cx from 'classnames';
import Nav from './nav';
import styles from './header.module.css';
import { updateStyle } from '../../../lib/domHelper';

function handlClick() {
  const drawer: HTMLElement = document.querySelector('[data-element="drawer"');
  const clip: HTMLElement = document.querySelector('[data-element="clip"');
  updateStyle(drawer, [{ name: 'width', value: null }, {name: 'transform', value: null }]);
  updateStyle(clip, [{ name: 'clip', value: null }]);
}

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
          <Link to="/" className={styles.link} onClick={handlClick}>
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