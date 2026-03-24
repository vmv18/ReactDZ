import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/molecules/Post/Post';
import SearchBar from './components/molecules/SearchBar/SearchBar';
import { postsData, students } from './data';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'News', 'Updates', 'Tech'];

  // Фільтрація постів за пошуком і категорією
  const filteredPosts = postsData.filter((post) => {
    const matchesSearch = post.content.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  // 1. Сортування студентів за спаданням балів
  const sortedStudents = [...students].sort((a, b) => b.score - a.score);

  // 2. Фільтрація тільки активних студентів з балом > 60
  const activeTopStudents = students
    .filter(student => student.isActive && student.score > 60);

  // 3. Підрахунок середнього бала всіх активних студентів
  const activeStudents = students.filter(student => student.isActive);
  const averageScore = activeStudents.length > 0 
    ? activeStudents.reduce((acc, student) => acc + student.score, 0) / activeStudents.length
    : 0;

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

        {/* Практична робота №2: Трансформація даних */}
        <div className="students-container">
          <h2 className="section-title">Список всіх студентів (відсортовані)</h2>
          <ul className="students-list">
            {sortedStudents.map(student => (
              <li 
                key={student.id} 
                className="student-item"
                style={!student.isActive ? { 
                  color: '#9ca3af', 
                  textDecoration: 'line-through', 
                  opacity: 0.6 
                } : {}}
              >
                <strong>{student.name}</strong> — {student.score} балів
              </li>
            ))}
          </ul>

          <div className="top-students-block">
            <h2 className="section-title">Топ активних студентів (бал &gt; 60)</h2>
            <ul className="students-list">
              {activeTopStudents.map(student => (
                <li key={student.id} className="student-item active-top">
                  <strong>{student.name}</strong> — {student.score} балів
                </li>
              ))}
            </ul>
          </div>

          <div className="average-score-block">
            <p>Середній бал активних студентів: <span className="accent-text">{averageScore.toFixed(1)}</span></p>
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;
