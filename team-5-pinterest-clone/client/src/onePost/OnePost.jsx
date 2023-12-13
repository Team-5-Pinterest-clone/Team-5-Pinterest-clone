import React, { useState, useEffect } from "react";
import axios from "axios";

const OnePost = ({ idUsers }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8800/api/users/${idUsers}/posts`
        );
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [idUsers]);

  return (
    <div>
      <h1>Single Post</h1>
      {post ? (
        <div className="post-details">
          <h2>{post.description}</h2>
          <p>Category: {post.categories}</p>
          <img src={post.photo} alt="Post" className="post-image" />
          <p>Created at: {post.createdAt}</p>
          {/* Add more elements to display other post details */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default OnePost;
