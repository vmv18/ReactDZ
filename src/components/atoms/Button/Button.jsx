import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, onClick, variant = 'primary', disabled = false, ...rest }) => {
  const btnClass = variant === 'secondary' ? styles.secondary : styles.primary;
  
  return (
    <button 
      className={`${styles.button} ${btnClass} ${disabled ? styles.disabled : ''}`} 
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
