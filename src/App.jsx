import React from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/molecules/Post/Post';
import { postsData } from './data';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <div className="posts-container">
          <h2 className="feed-title">Стрічка новин</h2>
          {postsData.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
