// src/components/ListPosts.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>All Posts</h2>
      {posts.map((post) => (
        <div key={post._id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p><em>By: {post.author}</em></p>
        </div>
      ))}
    </div>
  );
};

export default ListPosts;
