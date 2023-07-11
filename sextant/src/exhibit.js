import React from 'react';

function Exhibit({ heading, children }) {
    return (
      <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '4px',
        padding: '16px',
        background: '#fff',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
      >
        <h2>{heading}</h2>
        {children}
      </div>
    );
  }
  
  export default Exhibit;