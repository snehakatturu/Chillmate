import React, {useState} from "react";
import PropTypes from "prop-types";
import "./style.css";
import "./ChillMateLogo.png"
import Navbar from "./navbar";
import { Link } from "react-router-dom";

const Forum = () => {
    
    // State to handle form inputs and posts
    const [topic, setTopic] = useState('');
    const [postContent, setPostContent] = useState('');
    const [posts, setPosts] = useState([]);
  
    // Handle form submission to add new posts
    const handleSubmit = (e) => {
      e.preventDefault();
      if (topic.trim() === '' || postContent.trim() === '') {
        alert('Please fill out both fields!');
        return;
      }
  
     
      const newPost = {
        topic,
        content: postContent,
        liked: false,
      };
      setPosts([newPost, ...posts]); 
      setTopic(''); 
      setPostContent('');
    };
  
    // Toggle like status for a post
    const toggleLike = (index) => {
      const updatedPosts = posts.map((post, i) => {
        if (i === index) {
          return { ...post, liked: !post.liked };
        }
        return post;
      });
      setPosts(updatedPosts);
    };
    
    return (
      <div className="forum">
        <Navbar />
        {/* Forum Page */}
        <div className="container1">
           
           <h1>Forum</h1><br />
         
          {/* Post Form */}
          <div className="post-form">
            <h2>Create a New Post</h2>
            <form id="postForm" onSubmit={handleSubmit}>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Topic"
                required
              />
              <textarea
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                placeholder="Write something..."
                required
              />
              <button className="postbutton" type="submit">Submit</button>
            </form>
          </div>
  
          {/* Posts Section */}
          <div className="posts-section">
            <h2>Posts</h2>
            <ul className="forumul" id="postsList">
              {posts.map((post, index) => (
                <li key={index} className="post-item">
                  <div className="post-author">{post.topic}</div>
                  <div className="post-content">{post.content}</div>
  
                  {/* Like Button */}
                  <div className="like-container">
                    <button
                      className={`like-btn ${post.liked ? 'liked' : ''}`}
                      onClick={() => toggleLike(index)}
                    >
                      <span className="like-icon">👍</span>
                      <span className="like-text">
                        {post.liked ? 'Liked' : 'Like'}
                      </span>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default Forum;