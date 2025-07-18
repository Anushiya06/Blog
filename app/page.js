'use client';
import { useRouter } from 'next/navigation';
import './globals.css';
export default function HomePage() {
  const router = useRouter();

  return (
    <div>
      <nav className="navbar">
        <div className="nav-container">
          <h2 className="nav-title">Blog App</h2>
          <div className="nav-links">
            <button 
              className="nav-btn user-btn" 
              onClick={() => router.push('/userlogin')}
            >
              User Login
            </button>
            <button 
              className="nav-btn admin-btn" 
              onClick={() => router.push('/adminlogin')}
            >
              Admin Login
            </button>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <div className="welcome-section">
          <h1 className="welcome-title">Welcome to Blog App</h1>
          <p className="welcome-text">Discover amazing blog posts and share your thoughts</p>
        </div>

        <section className="blogs-preview">
          <h2>Latest Blog Posts</h2>
          <div className="blog-cards">
            <div className="blog-card" onClick={() => router.push('/blogs')}>
              <h3>Getting Started with Next.js</h3>
              <p>Learn the basics of Next.js framework...</p>
              <span className="read-more">Read More →</span>
            </div>
            <div className="blog-card" onClick={() => router.push('/blogs')}>
              <h3>Understanding React Hooks</h3>
              <p>Master React Hooks for better components...</p>
              <span className="read-more">Read More →</span>
            </div>
            <div className="blog-card" onClick={() => router.push('/blogs')}>
              <h3>CSS Grid vs Flexbox</h3>
              <p>Learn when to use Grid and Flexbox...</p>
              <span className="read-more">Read More →</span>
            </div>
          </div>
          <div className="view-all-section">
            <button 
              className="view-all-btn" 
              onClick={() => router.push('/blogs')}
            >
              View All Blogs
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
