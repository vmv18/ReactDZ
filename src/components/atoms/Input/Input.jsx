import React from 'react';
import styles from './Input.module.css';

const Input = ({ type = 'text', placeholder, label }) => {
  return (
    <div className={styles.inputWrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <input 
        type={type} 
        className={styles.input} 
        placeholder={placeholder} 
      />
    </div>
  );
};

export default Input;
