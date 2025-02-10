import React from 'react'
import blogs from '../../data/blogData'
import './BlogSection.css'



export default function blogSection() {
  return (
    <div className='blog-section'>
      <h1>All Our Blogs</h1>
        <div className='blog-container'>
        {blogs.map((blog)=> (
            <div key={blog.id} className='blog-card'>
            <img src={blog.image} alt={blog.image} className='blog-image' />
            <h1 className='blog-title'>{blog.title}</h1>
            <p className='blog-description'>{blog.description}</p>
          </div>
        
        ))}

      </div>
    </div>
  );
}
