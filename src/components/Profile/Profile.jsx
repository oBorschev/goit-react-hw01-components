import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ user }) => {
  const { src, alt, name, tag, location } = user;
  const styleProfile = styles.profile;
  const styleAvatar = styles.avatar;
  const styleDescription = styles.description;
  const styleListStats = styles.stats;
  const styleName = styles.name;
  const styleLable = styles.lable;
  const styleQuantity = styles.quantity;

  return (
    <div className={styleProfile}>
      <div className={styleDescription}>
        <img src={src} alt={alt} className={styleAvatar} />
        <p className={styleName}>{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className={styleListStats}>
        <li className={styleLable}>
          <span>Followers</span>
          <span className={styleQuantity}>1000</span>
        </li>
        <li className={styleLable}>
          <span className={styleLable}>Views</span>
          <span className={styleQuantity}>2000</span>
        </li>
        <li className={styleLable}>
          <span className={styleLable}>Likes</span>
          <span className={styleQuantity}>3000</span>
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
