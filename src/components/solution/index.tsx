import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import cx from 'classnames';
import styles from './solution.module.css';

function Solution() {
  const data = useStaticQuery(graphql`
    query {
      info: file(relativePath: {eq: "schema.svg"}) {
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
    <section id="main" className={cx('inner', styles.container)}>
      <div className={styles.content}>
        <img src={data.info.publicURL} className={styles.info} alt="Biodec" />
        <ul className={styles.list}>
          <li className={styles.item}>
            <p>Цемент Известь Песок/зола Гипс Газообразователь</p>
          </li>
          <li className={styles.item}>
            <p>Газобетон высокого качества со сниженной стоимостью</p>
          </li>
          <li className={styles.item}>
            <p>Энерогоэффективное и экологичное жилье</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Solution;