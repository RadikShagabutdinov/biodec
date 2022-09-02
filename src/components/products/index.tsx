import * as React from 'react';
import cx from 'classnames';
import styles from './products.module.css';

function Products() {
  return (
    <section id="products" className={cx('inner', styles.container)}>
      <div className="sk" />
      <div className={styles.content}>
        <h2 className={cx('title', styles.title)}>Продукты</h2>
        <div className={styles.text}>
          <p>Компания ООО &laquo;Биодек&raquo; является разработчиком и производителем 
          линейки органических добавок для производства ячеистого бетона серии
          <strong> IQSolution</strong>.</p>
          <p>Название линейки <strong>IQ</strong> определяет возможность добавок
          действовать избирательно, умно, в зависимости от поставленной и решаемой
          задачи. В связи с этим спектр добавок <strong>IQSolution</strong> включает
          в себя три марки <strong>IQPor</strong>, <strong>IQMix</strong> и 
          <strong> IQStep</strong>.</p>
        </div>
      </div>
      <h3 className={styles.subtitle}>IQSolution</h3>
      <p className={styles.description}>решает следующие задачи</p>
      <ul className={styles.list}>
        <li className={styles.item}>Экономия вяжущих компонентов до 20% без потери прочности</li>
        <li className={styles.item}>Снижение содержания воды в смеси</li>
        <li className={styles.item}>Влияние на сроки схватывания, как в большую, так и в меньшую сторону</li>
        <li className={styles.item}>Избавление от трещин и расслоений, нормализация структуры ячеистого бетона</li> 
        <li className={styles.item}>Снижение брака при делении массива на блоки</li>
      </ul>
    </section>
  )
}

export default Products;
