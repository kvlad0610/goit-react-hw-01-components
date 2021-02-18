import styles from "./Statistics.module.css";

const Statistics = ({ title, statistics }) => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>{ title}</h2>

    <ul className={styles.statList}>
      {statistics.map(statistic =>
      <li key={statistic.id} className={styles.item}>
        <span className={styles.label}>{statistic.label }</span>
        <span className={styles.percentage}>{statistic.percentage }%</span>
      </li>
      )}
    </ul>
  </section>
);

export default Statistics;