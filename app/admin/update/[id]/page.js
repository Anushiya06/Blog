'use client';
import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import '@/app/styles/blog.css';

export default function UpdateBlog({ params }) {
  const { id } = use(params);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  useEffect(() => {
    const savedBlogs = localStorage.getItem('blogs');
    if (savedBlogs) {
      const blogs = JSON.parse(savedBlogs);
      const blog = blogs.find(blog => blog.id === parseInt(id));
      if (blog) {
        setTitle(blog.title);
        setContent(blog.content);
      } else {
        alert('Blog not found');
        router.push('/admin/update');
      }
    }
  }, [id, router]);

  const handleUpdate = () => {
    if (!title || !content) {
      alert('Please fill in all fields');
      return;
    }

    const savedBlogs = localStorage.getItem('blogs');
    if (savedBlogs) {
      const blogs = JSON.parse(savedBlogs);
      const blogIndex = blogs.findIndex(blog => blog.id === parseInt(id));
      
      if (blogIndex !== -1) {
        blogs[blogIndex] = {
          ...blogs[blogIndex],
          title,
          content
        };
        
        localStorage.setItem('blogs', JSON.stringify(blogs));
        alert('Blog updated successfully!');
        router.push('/admin/dashboard');
      } else {
        alert('Blog not found');
      }
    }
  };

  return (
    <div className="form-page">
      <h2 className="form-title">Edit Blog</h2>
      <div className="form">
        <input 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
          className="input"
          placeholder="Blog Title"
        />
        <textarea 
          value={content} 
          onChange={(e) => setContent(e.target.value)}
          className="textarea"
          placeholder="Blog Content"
        />
        <div className="buttons">
          <button onClick={handleUpdate} className="btn btn-primary">
            Update Blog
          </button>
          <button onClick={() => router.push('/admin/update')} className="btn btn-secondary">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
