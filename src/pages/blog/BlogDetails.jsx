import React from 'react'
import { useParams } from 'react-router-dom';
import blogs from '../../data/blogData';

export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));
  if (!blog) return <div>Blog not found</div>

  return (
    <div>
      <img src= {blog.image} alt="" />
      <h1>{blog.title}</h1>
      <p>{blog.description}</p>
      </div>
  )
}

