import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ user }) => {
  const { src, alt, name, tag, location } = user;

  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={src} alt={alt} className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className={styles.stats}>
        <li className={styles.lable}>
          <span>Followers</span>
          <span className={styles.quantity}>1000</span>
        </li>
        <li className={styles.lable}>
          <span className={styles.lable}>Views</span>
          <span className={styles.quantity}>2000</span>
        </li>
        <li className={styles.lable}>
          <span className={styles.lable}>Likes</span>
          <span className={styles.quantity}>3000</span>
        </li>
      </ul>
    </div>
  );
};
Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }),
};
Profile.defaultProps = {
  user: PropTypes.shape({ alt: 'user avatar' }),
};

export default Profile;
