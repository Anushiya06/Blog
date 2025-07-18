'use client';
import { useState, useEffect, use } from 'react';
import Link from 'next/link';
import '@/app/styles/simple-blog.css';

export default function BlogPost({ params }) {
  const { id } = use(params);
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    const savedBlogs = localStorage.getItem('blogs');
    if (savedBlogs) {
      const blogs = JSON.parse(savedBlogs);
      const foundBlog = blogs.find(blog => blog.id === parseInt(id));
      setBlog(foundBlog);
    }
  }, [id]);
  const getBlogImage = (blogId) => {
    if (blogId <= 4) {
      return `/blog${blogId}.jpg`;
    } else if (blogId == 5) {
      return `/blog5.jpeg`;
    } else {
      return `/blog-${blogId}.jpg`;
    }
  };

  const handleImageError = (e) => {
    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkRlZmF1bHQgSW1hZ2U8L3RleHQ+PC9zdmc+';
  };
  if (!blog) {
    return (
      <div className="error">
        <h1 className="error-title">Blog Not Found</h1>
        <p className="error-text">
          The blog post for does not exist.
        </p>
        <div className="nav-buttons">
          <Link href="/blogs" className="nav-btn">
            View All Blogs
          </Link>
          <Link href="/" className="nav-btn secondary">
            Go Home
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="single">
      <img 
        src={getBlogImage(id)} 
        alt={blog.title}
        width={800}
        height={400}
        className="single-image"
        onError={handleImageError}
      />
      <h1 className="single-title">{blog.title}</h1>
      <div className="single-content">
        {blog.content}
      </div> 
    </div>
  );
}