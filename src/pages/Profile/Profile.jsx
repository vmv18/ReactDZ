import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
      <h2 className="section-title">Особистий кабінет</h2>
      <nav style={{ marginBottom: '24px', display: 'flex', gap: '16px' }}>
        <NavLink 
          to="/profile"
          end
          style={({ isActive }) => ({
            textDecoration: 'none',
            padding: '8px 16px',
            borderRadius: '6px',
            backgroundColor: isActive ? '#f97316' : '#f3f4f6',
            color: isActive ? 'white' : '#4b5563',
            transition: 'all 0.2s'
          })}
        >
          Огляд
        </NavLink>
        <NavLink 
          to="/profile/settings"
          style={({ isActive }) => ({
            textDecoration: 'none',
            padding: '8px 16px',
            borderRadius: '6px',
            backgroundColor: isActive ? '#f97316' : '#f3f4f6',
            color: isActive ? 'white' : '#4b5563',
            transition: 'all 0.2s'
          })}
        >
          Налаштування
        </NavLink>
      </nav>
      <div style={{ padding: '24px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
