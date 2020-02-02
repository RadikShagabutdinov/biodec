import * as React from 'react';
import cx from 'classnames';
import { useStaticQuery, graphql  } from 'gatsby';
import Layout from '../../components/layout';
import styles from './contacts.module.css';

function Contacts() {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: {eq: "logo.svg"}) {
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
    <Layout title="Контакты">
      <article className={cx('article', styles.content)}>
        <img className={styles.logo} src={data.image.publicURL} alt="Biodec" />
        <div className={styles.wrapper}>
          <p>ООО «Биодек»</p>
          <p>620144, РФ, Свердловская область</p>
          <p>г. Екатеринбург, ул. Фрунзе, д. 67, кв. 35</p>
          <p>Телефон: <a href="tel:8(950)557-33-11" className="link">8(950)557-33-11</a></p>
          <p>E-mail: <a href="mailto:biodecltd@gmail.com" className="link">biodecltd@gmail.com</a></p>
        </div>
      </article>
    </Layout>
  )
}

export default Contacts;
