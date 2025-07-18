'use client';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function UpdateClient() {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const blogId = searchParams.get('id');

  useEffect(() => {
    const savedBlogs = localStorage.getItem('blogs');
    if (savedBlogs) {
      const blogsData = JSON.parse(savedBlogs);
      setBlogs(blogsData);
      
      if (blogId) {
        const blog = blogsData.find(b => b.id === parseInt(blogId));
        if (blog) {
          setSelectedBlog(blog);
          setTitle(blog.title);
          setContent(blog.content);
        }
      }
    }
  }, [blogId]);

  const handleUpdate = () => {
    if (!selectedBlog) {
      alert('Please select a blog to update');
      return;
    }

    if (!title || !content) {
      alert('Please fill in all fields');
      return;
    }

    const updatedBlogs = blogs.map(blog => 
      blog.id === selectedBlog.id 
        ? { ...blog, title, content }
        : blog
    );

    setBlogs(updatedBlogs);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    
    alert('Blog updated successfully!');
    router.push('/admin/dashboard');
  };

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
    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNkZGQiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+SW1hZ2U8L3RleHQ+PC9zdmc+';
  };

  if (blogId && selectedBlog) {
    return (
      <div className="form-container">
        <h1 className="form-title">Update Blog</h1>
        
        <input 
          className="form-input"
          placeholder="Enter blog title..." 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <textarea 
          className="form-textarea"
          placeholder="Write your blog content here..." 
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        
        <div className="form-buttons">
          <button className="form-btn save" onClick={handleUpdate}>
            Update Blog
          </button>
          <button className="form-btn cancel" onClick={() => router.push('/admin/dashboard')}>
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <h1 className="admin-title">Select Blog to Update</h1>
      
      <div className="blog-list">
        {blogs.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#7f8c8d' }}>No blogs available</p>
        ) : (
          blogs.map(blog => (
            <div key={blog.id} className="blog-item">
              <img 
                src={getBlogImage(blog.id)} 
                alt={blog.title}
                className="blog-image-small"
                onError={handleImageError}
              />
              <h3 className="blog-item-title">{blog.title}</h3>
              <p className="blog-item-content">
                {blog.content.length > 100 
                  ? `${blog.content.substring(0, 100)}...` 
                  : blog.content
                }
              </p>
              <div className="blog-item-buttons">
                <button 
                  className="blog-item-btn edit"
                  onClick={() => router.push(`/admin/update?id=${blog.id}`)}
                >
                  Select to Edit
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <button className="admin-btn" onClick={() => router.push('/admin/dashboard')}>
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}