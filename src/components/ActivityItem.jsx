import React from 'react';
import styles from './ActivityItem.module.css';

const ActivityItem = ({ action, date }) => {
  return (
    <div className={styles.itemContainer}>
      <span className={styles.actionText}>{action}</span>
      <span className={styles.dateText}>{date}</span>
    </div>
  );
};

export default ActivityItem;
