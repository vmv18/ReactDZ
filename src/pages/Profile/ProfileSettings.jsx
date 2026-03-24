import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/atoms/Button/Button';

const ProfileSettings = () => {
  const navigate = useNavigate();

  const handleSave = () => {
    // Імітація збереження налаштувань
    alert("Налаштування збережено!");
    navigate('/');
  };

  return (
    <div>
      <h3 style={{ marginTop: 0, color: '#1f2937' }}>Налаштування профілю</h3>
      <p style={{ color: '#4b5563', marginBottom: '20px' }}>У цьому розділі ви можете змінити свої параметри.</p>
      
      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Email сповіщення</label>
        <input type="checkbox" defaultChecked /> Отримувати новини
      </div>
      
      <div style={{ marginTop: '24px' }}>
        <Button onClick={handleSave} variant="primary">
          Зберегти та повернутися
        </Button>
      </div>
    </div>
  );
};

export default ProfileSettings;
