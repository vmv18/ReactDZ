import React from 'react';
import ActivityItem from './ActivityItem';
import styles from './ActivityList.module.css';

const ActivityList = ({ activities }) => {
  if (!activities || activities.length === 0) {
    return <p className={styles.empty}>Немає активностей для відображення.</p>;
  }

  return (
    <div className={styles.listContainer}>
      <h3 className={styles.title}>Останні активності</h3>
      {activities.map((activity, index) => (
        <ActivityItem 
          key={index}
          action={activity.action}
          date={activity.date}
        />
      ))}
    </div>
  );
};

export default ActivityList;
