import React from 'react';

export default function Navbar() {
  return (
    <div style={navbarStyle}>
      <div style={leftSectionStyle}>Waste Segregation</div>
      <div style={rightSectionStyle}>Home</div>
    </div>
  );
}

const navbarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px',
  background: '#333',
  color: '#fff',
};

const leftSectionStyle = {
  fontWeight: 'bold',
};

const rightSectionStyle = {
  cursor: 'pointer',
};
