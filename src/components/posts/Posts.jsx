import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
        console.log(posts)
        setLoading(false);
      } catch (error) {
        console.log(error);
      };
    };
    fetchPosts();
  }, []);
  return <div>Posts</div>;
}

export default Posts;
