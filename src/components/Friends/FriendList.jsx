import PropTypes from 'prop-types';

import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(({ id, isOnline, avatar, name }) => (
      <li key={id} className={styles.item}>
        <span className={isOnline ? styles.online : styles.offline}>
          {isOnline}
        </span>
        <img className={styles.avatar} src={avatar} alt="" width="48" />

        <p className={styles.name}>{name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
