import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './MainLayout.module.css';

const MainLayout = () => {
  return (
    <div className={styles.layoutContainer}>
      <header className={styles.header}>
        <div className={styles.logo}>MyReactApp</div>
        <nav className={styles.nav}>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}
            end
          >
            Головна
          </NavLink>
          <NavLink 
            to="/feed" 
            className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}
          >
            Стрічка новин
          </NavLink>
          <NavLink 
            to="/profile" 
            className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}
          >
            Профіль
          </NavLink>
          <NavLink 
            to="/pr5" 
            className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}
          >
            ПР 5
          </NavLink>
        </nav>
      </header>
      
      <main className={styles.mainContent}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
