import React from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/molecules/Card/Card';
import Input from './components/atoms/Input/Input';
import Button from './components/atoms/Button/Button';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Card>
          <h2 className="form-title">
            Ласкаво просимо
          </h2>
          <Input type="email" label="Email" placeholder="Введіть ваш email" />
          <Input type="password" label="Пароль" placeholder="Введіть пароль" />
          
          <div className="button-group">
            <Button variant="primary" onClick={() => console.log('Login clicked')}>
              Увійти
            </Button>
            <Button variant="secondary" onClick={() => console.log('Register clicked')}>
              Реєстрація
            </Button>
          </div>
        </Card>
      </main>
    </div>
  );
}

export default App;
