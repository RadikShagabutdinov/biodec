import * as React from 'react';
import cx from 'classnames';
import scriptLoader, { removeNode, ScriptAttributes } from '../../lib/script-loader';
import { yandexMap, googleMap } from './services';
import styles from './contacts.module.css';

interface Props {
  loadScript: (src: string, attr?: ScriptAttributes) => Promise<Element>;
}

class Contacts extends React.Component<Props> {

  componentDidMount() {
    this.props.loadScript(process.env.YANDEX_MAP_URL)
      .then(() => { window.ymaps.ready(yandexMap); })
      .catch((node) => {
        removeNode(node);
        window['initMap'] = googleMap;
        return this.props.loadScript(process.env.GOOGLE_MAP_URL, { async: 'true', defer: 'true' });
      });
  }

  render() {
    return (
      <section id="contacts" className={styles.container}>
        <div className="sk" />
        <h2 className={cx('title', styles.title)}>Контакты</h2>
        <div className={styles.content}>
          <div id="map" className={styles.map} />
          <div className={styles.contacts}>
            <div className={styles.header}>
              <div className={styles.column}>
                <h3 className={styles.subtitle}>Производство:</h3>
                <p className={styles.region}>624070<br/>Свердловская область</p>
                <p className={styles.place}>г. Среднеуральск, <br/> ул. Ленина, 2Б</p>
              </div>
              <div className={styles.column}>
                <h3 className={styles.subtitle}>Для корреспонденции:</h3>
                <p className={styles.region}>620144<br/>Свердловская область</p>
                <p className={styles.place}>г. Екатеринбург, <br/> ул. Фрунзе, д. 67, кв. 35</p>
              </div>
            </div>
            <div className={styles.footer}>
              <a href="tel:+7(950)557-33-11" className={styles.tel}>+7(950)557-33-11</a>
              <a href="mailto:biodecltd@gmail.com" className={styles.mail}>biodecltd@gmail.com</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default scriptLoader(Contacts);