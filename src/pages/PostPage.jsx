import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { postsData } from '../data';
import Post from '../components/molecules/Post/Post';
import Button from '../components/atoms/Button/Button';

const PostPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  
  const post = postsData.find(p => p.id === Number(postId));

  if (!post) {
    return (
      <div className="empty-state">
        <p>Пост з ID "{postId}" не знайдено.</p>
        <div style={{ marginTop: '16px' }}>
          <Button onClick={() => navigate(-1)}>Повернутися назад</Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div style={{ marginBottom: '24px' }}>
        <Button variant="secondary" onClick={() => navigate(-1)}>
          &larr; Назад
        </Button>
      </div>
      <h2 className="section-title">Перегляд поста</h2>
      <Post post={post} />
    </div>
  );
};

export default PostPage;
