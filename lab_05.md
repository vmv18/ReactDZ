# Лабораторна робота №5: Context API та захищені маршрути

## Фрагменти коду

### AuthContext (`src/context/AuthContext.jsx`)
```javascript
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = (email) => {
    setIsAuthenticated(true);
    setUser({ email });
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
```

### ProtectedRoute HOC (`src/components/hoc/ProtectedRoute.jsx`)
```javascript
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Перенаправлення неавторизованого користувача
    return <Navigate to="/login" replace />;
  }

  // Рендер захищеного контенту
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
```

---

## Відповіді на контрольні запитання

### 1. Яку архітектурну проблему вирішує Context API?
Context API вирішує проблему, яка в екосистемі React відома як **"prop drilling"** (просвердлювання пропсів). Коли додаток розростається і набуває глибокої вкладеності компонентів, передача глобальних даних (наприклад, теми оформлення, інформації про авторизованого користувача, мови інтерфейсу) від кореневого компонента (App) до компонента глибоко в дереві через пропси стає вкрай незручною. Context API дозволяє створити глобальне 'сховище' (`Provider`), значення якого доступні в будь-якому вкладеному компоненті через хук `useContext`, без необхідності їх явної передачі через проміжні компоненти.

### 2. Чому для глобального стану іноді обирають Redux або Zustand замість Context API?
Хоча Context API чудово підходить для даних, які рідко змінюються (наприклад, стан авторизації або тема), він неоптимальний для станів, які швидко і часто мутують. Коли значення контексту оновлюється, React змушує **всі** компоненти, які його підписані на цей контекст (викликають `useContext`), зробити re-render. 
Сторонні бібліотеки на кшталт **Redux** або **Zustand** обирають тому, що вони:
- Надають кращу продуктивність завдяки механізмам вибіркового оновлення (селекторам), що запобігає зайвим перемалюванням (re-renders).
- Мають зручні інструменти для налагодження (наприклад, Redux DevTools).
- Забезпечують більш жорстку і передбачувану архітектуру зміни станів (actions/reducers) для великих і складних додатків.

### 3. Яка роль HOC (Higher-Order Component) при реалізації захищених маршрутів?
Роль HOC (компонента вищого порядку) у контексті захищених маршрутів полягає у **безпековому перехопленні (middleware-like pattern)** рендерингу цільової сторінки. Компонент `ProtectedRoute` отримує "справжній" вміст сторінки через `children` (або `Outlet`), але перед тим, як відрендерити цей контент, перевіряє значення стану `isAuthenticated` із глобального контексту. Якщо користувач має доступ, HOC просто "пропускає" його (рендерячи `children`). Якщо ж доступу немає, HOC обрізає процес і повертає програмний редирект (через компонент `<Navigate>`).

### 4. Чому при перенаправленні в цьому завданні використовується `replace: true`?
Опція `replace: true` критично важлива для хорошого користувацького досвіду (UX). Замість того, щоб додавати новий запис (URL логіну) у стек історії браузера (`history push`), ця опція викликає **заміну** (replace) поточного поточного запису. 
Наприклад, якщо неавторизований користувач натиснув на посилання сторінки профілю, і його перекинуло на `/login`, використання `replace` розв'яже проблему "пастки кнопки Назад". Коли авторизований користувач увійде і спробує натиснути кнопку "Назад" у браузері, його поверне на ту сторінку, з якої він розпочав вхід (а не назад на форму логіну). Це унеможливлює повторне відмальовування вже нерелевантної сторінки форми входу для вже авторизованого юзера.
