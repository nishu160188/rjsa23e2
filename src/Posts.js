import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comments from './Comments';

const Posts = ({ userId }) => {
  const [posts, setPosts] = useState([]);
  const [showComments, setShowComments] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      setPosts(response.data.slice(0, 5));
    };
    fetchPosts();
  }, [userId]);

  const toggleComments = (postId) => {
    setShowComments((prevState) => ({
      ...prevState,
      [postId]: !prevState[postId]
    }));
  };

  return (
    <div className="posts">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <button onClick={() => toggleComments(post.id)}>
            {showComments[post.id] ? "Hide Comments" : "See Comments"}
          </button>
          {showComments[post.id] && <Comments postId={post.id} />}
        </div>
      ))}
    </div>
  );
};

export default Posts;
