import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css';
import arrayColorItem from './statColor';

const Stats = ({ title, stats }) => {
  return title ? (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>
        {stats.map(item => (
          <li
            className={styles.item}
            key={item.id}
            style={{
              backgroundColor:
                arrayColorItem[
                  Math.floor(Math.random() * arrayColorItem.length)
                ],
            }}
          >
            <span className="lable">{item.label}</span>
            <span className="percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  ) : (
    <h1>title parametr not input</h1>
  );
};

Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
Stats.defaultProps = {
  title: 'Upload stats',
};
export default Stats;
