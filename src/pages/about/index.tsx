import * as React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from 'gatsby'
import Layout from "../../components/layout";
import styles from './about.module.css';

function About() {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: {eq: "founder.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout title="О Нас">
      <article className="article">
        <Img
          fluid={data.placeholderImage.childImageSharp.fluid}
          className={styles.founder}
        />
        {/* <img src={require('../../images/founder.jpg')} className={styles.founder} alt=""/> */}
        <div className={styles.content}>
          <p>Компания <b>Биодек</b> - молодая команда с большим опытом применения химических добавок для ячеистых бетонов.</p>
          <ul>
            <li>Мы занимаемся разработкой, производством и поставкой химических композиций для повышения качества газобетона и снижения его себестоимости.</li>
            <li>Наши успехи подтверждаются результатами наших клиентов.</li>
            <li>Мы готовы к совместной работе с производителями, адаптируя наши продукты под конкретную технологию и сырьё.</li>
            <li>Объединив наши компетенции с уникальным опытом наших клиентов, мы разработаем решения, которые принесут и прибыль, и пользу!</li>
          </ul>
          <p>Экономия для экологии.</p>
        </div>
      </article>
    </Layout>
  );
}

export default About;
