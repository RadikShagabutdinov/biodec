import * as React from 'react';
import cx from 'classnames';
import Layout from '../../components/layout';
import styles from './faq.module.css';

function FAQ() {
  return (
    <Layout title="Часто задаваемые вопросы">
      <article className={cx('article', styles.container)}>
        <ol>
          <li>
            <h3>Для чего нужны добавки в ячеистый бетон?</h3>
            <p>Снижение себестоимости за счет экономии вяжущих, снижение количества брака, улучшение физико-технических свойств ячеистого бетона.</p>
          </li>
          <li>
            <h3>Зачем вводить добавку, если и так все хорошо?</h3>
            <p>Экономия нескольких миллионов рублей в год, за счет снижения количества вяжущих.</p>
          </li>
          <li>
            <h3>Зачем нужна добавка, если основное сырьё не стабильно?</h3>
            <p>Добавка IQSolution производится индивидуально под каждое производство, что позволяет проявлять гибкость при сезонных проявлениях нестабильности основного сырья и подстраиваться под каждую конкретную ситуацию.</p>
          </li>
          <li>
            <h3>Нужно ли дополнительное оборудование для введения добавки в ячеистобетонную смесь?</h3>
            <p>Если такого оборудования не предусмотрено, то обязательный его монтаж не требуется. Добавка может вводиться совместно с алюминиевой суспензией.</p>
          </li>
          <li>
            <h3>Можно ли добавку вводить совместно с алюминиевой суспензией?</h3>
            <p>Добавка обладает нейтральным показателем водорода pH и может вводиться в суспензию перед добавлением газообразователя. При этом добавление дополнительных ПАВ, в случае использования пудр, не требуется.</p>
          </li>
          <li>
            <h3>На какой стадии нужно вводить добавку в ячеистобетонную смесь?</h3>
            <p>Добавку IQSolution необходимо вводить либо совместно, либо перед добавлением алюминиевой суспензии. При введении добавки в смеситель на начальной стадии с водой, перед дозировкой твердых компонентов, эффективность добавки снижается.</p>
          </li>
          <li>
            <h3>Порядок внедрения добавки на предприятие?</h3>
            <p>Вы заполняете наш опросник, мы согласно опроснику подбираем необходимую добавку. Затем высылаем Вам бесплатный образец на несколько заливок. Проводим испытания с выездом или дистанционно. По результатам, если требуется доработка добавки, мы ее дорабатываем и отправляем Вам бесплатный образец. При положительном исходе испытаний поставка рабочей добавки возможна либо в пластиковых бочках 200 л, либо в еврокубах.</p>
          </li>
        </ol>
      </article>
    </Layout>
  );
}

export default FAQ;