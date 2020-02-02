import * as React from 'react';
import Img from "gatsby-image";
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout';
import styles from './home/home.module.css';

function HomePage() {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: {eq: "sfyt.png"}) {
        childImageSharp {
          fluid(maxWidth: 50) {
            aspectRatio
            src
            srcSet
          }
        }
      }
    }
  `);
  return (
    <Layout title="Главная">
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        className={styles.img}
      />
    </Layout>
  )
}

export default HomePage;
