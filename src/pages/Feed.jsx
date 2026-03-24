import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Post from '../components/molecules/Post/Post';
import SearchBar from '../components/molecules/SearchBar/SearchBar';
import { postsData } from '../data';

const Feed = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'News', 'Updates', 'Tech'];

  const filteredPosts = postsData.filter((post) => {
    const matchesSearch = post.content.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="posts-container" style={{ marginBottom: '40px' }}>
      <h2 className="section-title">Стрічка новин</h2>
      
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

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
            <div key={post.id} style={{ marginBottom: '32px' }}>
              <Post post={post} />
              <Link 
                to={`/feed/${post.id}`} 
                style={{ 
                  display: 'inline-block', 
                  marginTop: '12px', 
                  color: '#f97316', 
                  fontWeight: '600', 
                  textDecoration: 'none' 
                }}
              >
                Відкрити пост &rarr;
              </Link>
            </div>
          ))
        ) : (
          <div className="empty-state">
            <p>Нічого не знайдено за вашим запитом.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;
