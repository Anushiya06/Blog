'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { defaultBlogs } from '@/data/defaultBlogs';
import '@/app/styles/simple-blog.css';

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const savedBlogs = localStorage.getItem('blogs');
    if (savedBlogs) {
      setBlogs(JSON.parse(savedBlogs));
    } else {
      setBlogs(defaultBlogs);
      localStorage.setItem('blogs', JSON.stringify(defaultBlogs));
    }
  }, []);

  const getBlogImage = (blogId) => {
    if (blogId <= 4) {
      return `/blog${blogId}.jpg`;
    } else if (blogId === 5) {
      return `/blog5.jpeg`;
    } else {
      return `/blog-${blogId}.jpg`;
    }
  };

  const handleImageError = (e) => {
    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkRlZmF1bHQgSW1hZ2U8L3RleHQ+PC9zdmc+';
  };

  return (
    <div className="page">
      <h1 className="title">Our Blog Posts</h1>
      
      {blogs.length === 0 ? (
        <div className="no-blogs">
          <h2>No blogs available</h2>
          <p>Check back later for new content!</p>
        </div>
      ) : (
        <div className="blogs">
          {blogs.map(blog => (
            <div key={blog.id} className="blog">
              <img 
                src={getBlogImage(blog.id)} 
                alt={blog.title}
                width={300}
                height={200}
                className="blog-image"
                onError={handleImageError}
              />
              
              <h2 className="blog-title">{blog.title}</h2>
              
              <p className="blog-text">
                {blog.content.length > 100 
                  ? `${blog.content.substring(0, 100)}...` 
                  : blog.content
                }
              </p>
              
              <Link href={`/blogs/${blog.id}`} className="read-btn">
                Read More
              </Link>
            </div>
          ))}
        </div>
      )}
      
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <Link href="/" className="back-btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
