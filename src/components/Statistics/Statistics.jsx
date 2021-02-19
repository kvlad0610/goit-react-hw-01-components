import styles from "./Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({ title, statistics }) => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>{ title}</h2>

    <ul className={styles.statList}>
      {statistics.map(({id,label,percentage}) =>
      <li key={id} className={styles.item}>
        <span className={styles.label}>{label }</span>
        <span className={styles.percentage}>{percentage }%</span>
      </li>
      )}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  statistics: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    percentage:PropTypes.number.isRequired,
  })).isRequired
}

export default Statistics;