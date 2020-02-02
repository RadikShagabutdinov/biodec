import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../../components/layout';
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
    <Layout title="Документы">
      <article className={styles.content}>
        <ul className={styles.list}>
          {
            group.map(e => (
              <li className={styles.item} key={e.edges[0].node.id}>
                <Thumbnail edges={e.edges} />
              </li>
            ))
          }
        </ul>
      </article>
    </Layout>
  );
}

export default Papers;
