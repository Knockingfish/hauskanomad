import React, { useState, useEffect } from 'react';
import styles from './ReviewComments.module.css';
import axios from 'axios';

const ReviewComments = () => {
  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({ username: '', rating: 1, content: '' });
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    fetchComments();
    const loggedInUsername = localStorage.getItem('username');
    if (loggedInUsername) {
      setFormData(prevState => ({ ...prevState, username: loggedInUsername }));
      setLoggedIn(true);
    }
  }, []);

  const fetchComments = async () => {
    try {
      const response = await axios.get('/api/comments');
      setComments(response.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/comments', formData);
      fetchComments();
      setFormData({ username: '', rating: 1, content: '' });
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div className={styles.review_container}>
      {loggedIn && (
        <div className={styles.input_container}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username..."
              className={styles.input}
              disabled // Disable the input field for username
            />
            <input
              type="range"
              name="rating"
              value={formData.rating}
              min={1}
              max={5}
              onChange={handleChange}
              className={styles.input}
            />
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Enter your comment..."
              rows={4}
              className={styles.textarea}
            />
            <button type="submit" className={styles.input_button}>SUBMIT</button>
          </form>
        </div>
      )}
      <div className={styles.review_header}>
        <h2 className={styles.header}>Reviews and Comments</h2>
      </div>
      <div className={styles.comment_container}>
        {comments.map(comment => (
          <div key={comment._id} className={styles.comment}>
            <img className={styles.pfp} src="" alt="Profile" />
            <p className={styles.username}>{comment.username}</p>
            <div className={styles.rating}>{'★'.repeat(comment.rating)}</div>
            <p className={styles.comment_content}>{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewComments;
