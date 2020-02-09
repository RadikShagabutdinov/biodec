import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import cx from 'classnames';
import Thumbnail from '../../components/thumbnail';
import styles from './papers.module.css';

function sorter(a, b) {
  return a.node.relativeDirectory.localeCompare(a.node.relativeDirectory);
}

function Papers() {
  const { allFile: { group } } = useStaticQuery(graphql`
    query {
      allFile(filter: {sourceInstanceName: {eq: "aset"}}) {
        group(field: dir) {
          edges {
            node {
              id
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
              name
              publicURL
              extension
            }
          }
        }
      }
    }
  `);
  return (
    <section id="papers" className={cx('inner', styles.container)}>
      <div className="sk" />
      <h2 className={cx('title', styles.title)}>Документы</h2>
      <ul className={styles.list}>
        {
          group.map(e => (
            <li className={styles.item} key={e.edges[0].node.id}>
              <Thumbnail edges={e.edges} />
            </li>
          ))
        }
      </ul>
    </section>
  );
}

export default Papers;
