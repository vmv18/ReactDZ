import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/molecules/Post/Post';
import SearchBar from './components/molecules/SearchBar/SearchBar';
import { postsData, students } from './data';
import StudentList from './components/StudentList';
import StatisticsData from './components/StatisticsData';
import AboutAuthor from './components/AboutAuthor';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Стан для Практичної роботи 3
  const [showHelp, setShowHelp] = useState(false);
  const [filterActive, setFilterActive] = useState(false);
  const [activeTab, setActiveTab] = useState('list');

  const categories = ['All', 'News', 'Updates', 'Tech'];

  // Фільтрація постів за пошуком і категорією
  const filteredPosts = postsData.filter((post) => {
    const matchesSearch = post.content.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        
        {/* Лабораторна робота №3: Пошук і фільтрація */}
        <div className="posts-container" style={{ marginBottom: '40px' }}>
          <h2 className="section-title">Стрічка новин</h2>
          
          <SearchBar 
            searchTerm={searchTerm} 
            onSearchChange={setSearchTerm} 
          />

          <div className="category-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="posts-list">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <Post key={post.id} post={post} />
              ))
            ) : (
              <div className="empty-state">
                <p>Нічого не знайдено за вашим запитом.</p>
              </div>
            )}
          </div>
        </div>

        {/* Практична робота 3: Умовний рендеринг */}
        <div className="students-container">
          <h2 className="section-title">Практична робота 3: Студенти</h2>
          
          <div className="controls-group" style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
            <button 
              className="action-btn"
              onClick={() => setShowHelp(!showHelp)}
            >
              {showHelp ? "Приховати інструкцію" : "Показати інструкцію"}
            </button>
            
            <button 
              className="action-btn"
              onClick={() => setFilterActive(!filterActive)}
            >
              {filterActive ? "Показати всіх" : "Показати тільки успішних"}
            </button>
          </div>

          {/* Умовний рендеринг з && */}
          {showHelp && (
            <div className="help-panel">
              <p>Довідка: Дозволяє керувати списками студентів.</p>
            </div>
          )}

          {/* Система табів */}
          <div className="tabs-navigation">
            <button 
              className={`tab-pill ${activeTab === 'list' ? 'active-tab' : ''}`}
              onClick={() => setActiveTab('list')}
            >
              Всі студенти
            </button>
            <button 
              className={`tab-pill ${activeTab === 'stats' ? 'active-tab' : ''}`}
              onClick={() => setActiveTab('stats')}
            >
              Статистика
            </button>
            <button 
              className={`tab-pill ${activeTab === 'author' ? 'active-tab' : ''}`}
              onClick={() => setActiveTab('author')}
            >
              Про автора
            </button>
          </div>

          <div className="tab-content" style={{ marginTop: '24px' }}>
            {activeTab === 'list' && (
              <StudentList allStudents={students} filterActive={filterActive} />
            )}
            {activeTab === 'stats' && (
              <StatisticsData students={students} />
            )}
            {activeTab === 'author' && (
              <AboutAuthor />
            )}
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;
