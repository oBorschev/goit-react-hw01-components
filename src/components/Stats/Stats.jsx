import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css';

const Stats = ({ title, stats }) => {
  const styleSection = styles.section;
  const styleTitle = styles.title;
  const styleList = styles.list;
  const styleItem = styles.item;

  const arrayColorItem = [
    '##228B22',
    '#FF4500',
    '#FF0000',
    '#FFFF00',
    '#00FF7F',
  ];

  return title ? (
    <section className={styleSection}>
      <h2 className={styleTitle}>{title}</h2>
      <ul className={styleList}>
        {stats.map(item => (
          <li
            className={styleItem}
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
