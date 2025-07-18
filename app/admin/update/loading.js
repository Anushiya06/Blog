export default function Loading() {
  return (
    <div className="loading-container" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '50vh',
      fontSize: '1.2rem',
      color: '#666'
    }}>
      <p>Loading update page...</p>
    </div>
  );
}