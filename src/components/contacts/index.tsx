import * as React from 'react';
import styles from './contacts.module.css';

interface Props {

}

function init() {
    const myMap = new window.ymaps.Map("map", {
      center: [56.812562, 60.601463],
      zoom: 14,
      behaviors: ['default'],
      controls: [],
    }, {});
    const myPlacemark = new window.ymaps.Placemark(myMap.getCenter(), {
        name: 'Контакты'
      }, {});
    myMap.geoObjects.add(myPlacemark);
}

class Contacts extends React.Component<Props> {
  componentDidMount() {
    // try {
    //   window.ymaps.ready(init);
    // } catch (err) {
    //   console.warn(err);
    // }
  }

  render() {
    return (
      <section id="contacts" className={styles.container}>
        <h2 hidden>Контакты</h2>
        <div className={styles.content}>
          <div id="map" className={styles.map} />
          <div className={styles.contacts}>
            <div className={styles.header}>
              <p className={styles.region}>620144<br/>Свердловская область</p>
              <p className={styles.place}>г. Екатеринбург, <br/> ул. Фрунзе, д. 67, кв. 35</p>
            </div>
            <div className={styles.footer}>
              <a href="tel:8(950)557-33-11" className={styles.tel}>8(950)557-33-11</a>
              <a href="mailto:biodecltd@gmail.com" className={styles.mail}>biodecltd@gmail.com</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contacts;