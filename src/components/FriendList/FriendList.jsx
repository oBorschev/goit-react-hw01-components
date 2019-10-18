import React from 'react';
import PropTypes from 'prop-types';
import styles from './Friend.module.css';

const FriendList = ({ friends }) => {
  const friendList = styles.list;
  const itemList = styles.item;

  return (
    <ul className={friendList}>
      {friends.map(item => (
        <li className={itemList} key={item.id}>
          <span className="status">
            {item.isOnline ? (
              <div
                style={{
                  width: 20,
                  height: 20,
                  background: 'green',
                  borderRadius: 50,
                }}
              />
            ) : (
              <div
                style={{
                  width: 20,
                  height: 20,
                  background: 'red',
                  borderRadius: 50,
                }}
              />
            )}
          </span>
          <img
            srс={item.avatar}
            className="avatar"
            width="48"
            alt="user icon"
          />
          <p className="name">{item.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
};

export default FriendList;
