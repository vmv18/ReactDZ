import React from 'react';
import Card from '../Card/Card';
import Button from '../../atoms/Button/Button';
import styles from './Post.module.css';

const Post = ({ post }) => {
  return (
    <div className={styles.postWrapper}>
      <Card>
        <div className={styles.header}>
          <img 
            src={post.avatar} 
            alt={post.author} 
            className={styles.avatar} 
          />
          <div className={styles.meta}>
            <h3 className={styles.author}>{post.author}</h3>
            <span className={styles.date}>{post.date}</span>
          </div>
        </div>
        
        <p className={styles.content}>{post.content}</p>
        
        <div className={styles.footer}>
          <span className={styles.likes}>❤️ {post.likes} вподобань</span>
          <div className={styles.actions}>
            <Button variant="primary">Лайк</Button>
            <Button variant="secondary">Коментувати</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Post;
