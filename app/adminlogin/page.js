'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import '@/app/styles/login.css';
export default function AdminLogin() {
  const router = useRouter();
  const [adminName, setAdminName] = useState('');

  const handleLogin = () => {
    if (adminName) router.push('/admin/dashboard');
    else alert("Enter admin name");
  };

  return (
    <div className='login'>
      <h2>Admin Login</h2>
      <input placeholder="Admin Name" onChange={(e) => setAdminName(e.target.value)} /><br /><br />
      <input placeholder="Password" type="password" /><br /><br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
