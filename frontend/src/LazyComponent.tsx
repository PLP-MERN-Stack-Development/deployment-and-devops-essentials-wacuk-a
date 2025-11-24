import React from 'react';

const LazyComponent: React.FC = () => {
  return (
    <div style={{ padding: '20px', margin: '10px', border: '1px solid #ccc' }}>
      <h3>Lazy Loaded Component</h3>
      <p>This component is loaded lazily for better performance!</p>
    </div>
  );
};

export default LazyComponent;
