import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, onClick, variant = 'primary' }) => {
  const btnClass = variant === 'secondary' ? styles.secondary : styles.primary;
  
  return (
    <button className={`${styles.button} ${btnClass}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
