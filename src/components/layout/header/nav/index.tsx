import * as React from 'react';
import styles from './nav.module.css';

function goToSmooth(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  const target = event.currentTarget.getAttribute('href');
  const el = document.querySelector(target);
  if (el && typeof el.scrollIntoView === 'function') {
    el.scrollIntoView({ behavior: 'smooth' });
    // window.location.hash = target;
  } else {
    window.location.hash = target;
  }
}

function Nav() {
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a className={styles.link} onClick={goToSmooth} href="#about">О нас</a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} onClick={goToSmooth} href="#products">продукты</a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} onClick={goToSmooth} href="#papers">документы</a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} onClick={goToSmooth} href="#faq">FAQ</a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} onClick={goToSmooth} href="#contacts">контакты</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
