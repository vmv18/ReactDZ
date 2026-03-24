import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Input from '../../components/atoms/Input/Input';
import Button from '../../components/atoms/Button/Button';
import styles from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      login(email);
      // Програмне перенаправлення з replace: true
      navigate('/profile', { replace: true });
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <h2 className={styles.title}>Увійти до системи</h2>
        <p className={styles.subtitle}>Раді бачити вас знову!</p>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <Input 
              type="email"
              placeholder="ведіть email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <Input 
              type="password"
              placeholder="введіть пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <Button type="submit">
            Увійти
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
