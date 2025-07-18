'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import '@/app/styles/login.css';
export default function UserLogin() {
  const router = useRouter();
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username) router.push('/blogs');
    else alert("Enter username");
  };

  return (
    <div className='login'>
      <h2>User Login</h2>
      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} /><br /><br />
      <input placeholder="Password" type="password" /><br /><br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
