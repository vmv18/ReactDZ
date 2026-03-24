import React, { useState } from 'react';
import { students as initialStudents } from '../data';
import StudentList from '../components/StudentList';
import StatisticsData from '../components/StatisticsData';
import AboutAuthor from '../components/AboutAuthor';
import AddStudentForm from '../components/organisms/AddStudentForm';

const Home = () => {
  const [showHelp, setShowHelp] = useState(false);
  const [filterActive, setFilterActive] = useState(false);
  const [activeTab, setActiveTab] = useState('list');
  const [studentsList, setStudentsList] = useState(initialStudents);

  const handleAddStudent = (newStudent) => {
    setStudentsList([...studentsList, newStudent]);
  };

  return (
    <div>
      <h1 className="section-title">Ласкаво просимо до нашого React-застосунку!</h1>
      <p style={{ marginBottom: '40px', color: '#4b5563', fontSize: '18px' }}>
        Це вітальна сторінка, створена в рамках Лабораторної роботи №4 з маршрутизації.
      </p>
      
      <div className="students-container">
        <h2 className="section-title">Практична робота 4: Додавання студента</h2>
        <AddStudentForm onAddStudent={handleAddStudent} />
        
        <h2 className="section-title">Практична робота 3: Студенти</h2>
        <div className="controls-group" style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
          <button className="action-btn" onClick={() => setShowHelp(!showHelp)}>
            {showHelp ? "Приховати інструкцію" : "Показати інструкцію"}
          </button>
          <button className="action-btn" onClick={() => setFilterActive(!filterActive)}>
            {filterActive ? "Показати всіх" : "Показати тільки успішних"}
          </button>
        </div>

        {showHelp && (
          <div className="help-panel">
            <p>Довідка: Дозволяє керувати списками студентів. Зверху ви можете додати нових студентів до загального списку.</p>
          </div>
        )}

        <div className="tabs-navigation">
          <button className={`tab-pill ${activeTab === 'list' ? 'active-tab' : ''}`} onClick={() => setActiveTab('list')}>
            Всі студенти
          </button>
          <button className={`tab-pill ${activeTab === 'stats' ? 'active-tab' : ''}`} onClick={() => setActiveTab('stats')}>
            Статистика
          </button>
          <button className={`tab-pill ${activeTab === 'author' ? 'active-tab' : ''}`} onClick={() => setActiveTab('author')}>
            Про автора
          </button>
        </div>

        <div className="tab-content" style={{ marginTop: '24px' }}>
          {activeTab === 'list' && <StudentList allStudents={studentsList} filterActive={filterActive} />}
          {activeTab === 'stats' && <StatisticsData students={studentsList} />}
          {activeTab === 'author' && <AboutAuthor />}
        </div>
      </div>
    </div>
  );
};

export default Home;
