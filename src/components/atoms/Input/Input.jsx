import React from 'react';
import styles from './Input.module.css';

const Input = ({ type = 'text', placeholder, label, ...rest }) => {
  return (
    <div className={styles.inputWrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <input 
        type={type} 
        className={styles.input} 
        placeholder={placeholder} 
        {...rest}
      />
    </div>
  );
};

export default Input;
