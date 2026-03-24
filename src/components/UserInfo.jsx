import React from 'react';
import styles from './UserInfo.module.css';

const UserInfo = ({ name, email, role }) => {
  return (
    <div className={styles.userContainer}>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.email}>{email}</p>
      <div className={styles.roleBadge}>{role}</div>
    </div>
  );
};

export default UserInfo;
