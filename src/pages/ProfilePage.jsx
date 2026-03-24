import React, { useState, useEffect } from 'react';
import UserInfo from '../components/UserInfo';
import ActivityList from '../components/ActivityList';
import ProductContainer from '../components/Product/ProductContainer';

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Імітація завантаження даних користувача з API (контейнерний паттерн)
    const loadData = setTimeout(() => {
      setUserData({
        name: 'Марина Власова',
        email: 'maryna.v@example.com',
        role: 'Студент'
      });
      setActivities([
        { action: 'Завершила Практичну роботу 5', date: '24.03.2026' },
        { action: 'Залишила коментар', date: '23.03.2026' },
        { action: 'Оновила профіль', date: '20.03.2026' }
      ]);
      setIsLoading(false);
    }, 1000); 

    return () => clearTimeout(loadData);
  }, []);

  if (isLoading) {
    return <div style={{ textAlign: 'center', padding: '40px', color: '#6b7280' }}>Завантаження даних...</div>;
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 className="section-title">Практична робота 5 (Smart Component)</h1>
      {userData && (
        <UserInfo 
          name={userData.name} 
          email={userData.email} 
          role={userData.role} 
        />
      )}
      <ActivityList activities={activities} />

      <div style={{ marginTop: '60px' }}>
        <ProductContainer />
      </div>
    </div>
  );
};

export default ProfilePage;
