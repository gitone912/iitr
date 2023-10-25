import React from 'react';

export default function WasteQuote() {
    return (
        <div style={footerStyle}>
        <div style={leftSectionStyle}>
          <p>&copy; 2023 Team codex</p>
        </div>
        <div style={rightSectionStyle}>
          <p>Akash Verma</p>
          <p>Rajnandini Tiwari</p>
        </div>
      </div>
    );
  }
  
  const footerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    background: '#333',
    color: '#fff',
  };
  
  const leftSectionStyle = {
    fontWeight: 'bold',
  };
  
  const rightSectionStyle = {
    display: 'flex',
    gap: '20px',
  };