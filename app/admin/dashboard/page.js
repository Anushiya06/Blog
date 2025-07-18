'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './dashboard.css';
export default function AdminDashboard() {
  const [blogs, setBlogs] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const savedBlogs = localStorage.getItem('blogs');
    if (savedBlogs) {
      setBlogs(JSON.parse(savedBlogs));
    }
  }, []);

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this blog?')) {
      const updatedBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(updatedBlogs);
      localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    }
  };

  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin Dashboard</h1>
      
      <div className="admin-buttons">
        <button 
          className="admin-btn create" 
          onClick={() => router.push('/admin/create')}
        >
          Create New Blog
        </button>
        <button 
          className="admin-btn" 
          onClick={() => router.push('/blogs')}
        >
          View All Blogs
        </button>
        <button 
          className="admin-btn" 
          onClick={() => router.push('/')}
        >
          Back to Home
        </button>
      </div>

      <div className="blog-list">
        {blogs.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#7f8c8d' }}>No blogs available</p>
        ) : (
          blogs.map(blog => (
            <div key={blog.id} className="blog-item">
              <h3 className="blog-item-title">{blog.title}</h3>
              <p className="blog-item-content">
                {blog.content.length > 150 
                  ? `${blog.content.substring(0, 150)}...` 
                  : blog.content
                }
              </p>
              <div className="blog-item-buttons">
                <button 
                  className="blog-item-btn edit"
                  onClick={() => router.push(`/admin/update?id=${blog.id}`)}
                >
                  Edit
                </button>
                <button 
                  className="blog-item-btn delete"
                  onClick={() => handleDelete(blog.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
