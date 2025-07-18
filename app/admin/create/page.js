'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { defaultBlogs } from '@/data/defaultBlogs';
import './create.css';

export default function CreateBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleCreate = () => {
    if (!title || !content) {
      alert('Please fill in all fields');
      return;
    }

    const savedBlogs = localStorage.getItem('blogs');
    const blogs = savedBlogs ? JSON.parse(savedBlogs) : defaultBlogs;

    const newBlog = {
      id: blogs.length > 0 ? Math.max(...blogs.map(b => b.id)) + 1 : 1,
      title,
      content
    };

    blogs.push(newBlog);
    localStorage.setItem('blogs', JSON.stringify(blogs));
    
    alert('Blog created successfully!');
    router.push('/admin/dashboard');
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Create New Blog</h1>
      
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
        <button className="form-btn save" onClick={handleCreate}>
          Create Blog
        </button>
        <button className="form-btn cancel" onClick={() => router.push('/admin/dashboard')}>
          Cancel
        </button>
      </div>
    </div>
  );
}
