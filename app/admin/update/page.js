import { Suspense } from 'react';
import UpdateClient from './UpdateClient';

export default function UpdateBlog() {
  return (
    <Suspense fallback={<div className="loading-container">Loading update page...</div>}>
      <UpdateClient />
    </Suspense>
  );
}