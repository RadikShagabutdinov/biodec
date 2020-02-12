import * as React from 'react';
import cx from 'classnames';
import styles from './nav.module.css';
import { slideDawer, slideClip, getElements } from './helpers';

const PD = 20;

let isNeedChangeHash = false;

function clickHandler() {
  return (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const { currentTarget } = event;
    const target = currentTarget.getAttribute('href').replace('/', '');
    const el = document.querySelector(target);
    if (el && typeof el.scrollIntoView === 'function') {
      event.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
      // isNeedChangeHash = true;
    }
    const { container, drawer, clip } = getElements(styles);
    const t = currentTarget.getBoundingClientRect();
    slideDawer(drawer, t, container, PD);
    slideClip(clip, t, container, PD)
  }
}

function getSection(): ReadonlyArray<Element> {
  return [].slice.call(document.querySelectorAll('section .sk'));
}

function calback(entries) {
  const { target, isIntersecting } = entries[0];
  if (isIntersecting && isNeedChangeHash) {
    // isNeedChangeHash = false;
    // window.location.hash = target.parentElement.id;
  }
}

const MENU = [
  { title: 'О нас', id: 'about' },
  { title: 'продукты', id: 'products' },
  { title: 'документы', id: 'papers' },
  { title: 'FAQ', id: 'faq' },
  { title: 'контакты', id: 'contacts' },
]

function Nav() {
  React.useEffect(() => {
    const section = getSection();
    const options = {
      root: null,
      rootMargin: '0px 0px -100% 0px',
      threshold: 0,
    };

    const observers = []
    section.forEach((el, i) => {
      observers[i] = new IntersectionObserver(calback, options);
      observers[i].observe(el);
    });
    
    return () => {
      section.forEach((el, i) => observers[i].unobserve(el));
    }
  });
  const goToSmooth = clickHandler();
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <nav>
          <ul className={styles.list}>
            {
              MENU.map((el) => (
                <li className={styles.item} key={el.id}>
                  <a
                    className={styles.link}
                    onClick={goToSmooth}
                    href={`/#${el.id}`}>{el.title}</a>
                </li>
              ))
            }
          </ul>
        </nav>
        <div data-element="drawer" className={styles.drawer} />
        <ul data-element="clip" className={cx(styles.list, styles.clip)}>
          {
            MENU.map((el) => (
              <li className={styles.item} key={el.id}>{el.title}</li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default Nav;
