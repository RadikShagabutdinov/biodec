import * as React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from 'gatsby'
import cx from 'classnames';
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
    <section id="about" className={cx('inner', styles.container)}>
      <div className="sk" />
      <figure className={cx(styles.ceo, styles.dst)}>
        <Img
          fluid={data.placeholderImage.childImageSharp.fluid}
          className={styles.founder}
        />
        <figcaption className={styles.caption}>Генеральный директор <br/> Цикарева Ирина Анатольевна</figcaption>
      </figure>
      <div className={styles.content}>
        <h2 className={cx('title', styles.title)}>О нас</h2>
        <p className={styles.descreiption}>Компания ООО &laquo;Биодек&raquo; - молодая команда с большим опытом применения химических добавок для ячеистого бетона.</p>
        <figure className={cx(styles.ceo, styles.mb)}>
        <Img
          fluid={data.placeholderImage.childImageSharp.fluid}
          className={styles.founder}
        />
        <figcaption className={styles.caption}>Генеральный директор <br/> Баженов Игорь Владимирович</figcaption>
      </figure>
        <div className={styles.text}>
          <p>Мы занимаемся разработкой, производством и поставкой химических композиций для повышения качества газобетона и снижения его себестоимости.</p>
          <p>Наши успехи подтверждаются результатами наших клиентов.</p>
          <p>Мы готовы к совместной работе с производителями, адаптируя наши продукты под конкретную технологию и сырьё.</p>
          <p>Объединив наши компетенции с уникальным опытом наших клиентов, мы разработаем решения, которые принесут и прибыль, и пользу!</p>
        </div>
      </div>
    </section>
  );
}

export default About;
