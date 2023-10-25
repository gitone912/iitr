import React from 'react';

export default function WasteDetail() {
  return (
    <div style={containerStyle}>
    <br></br>
    <br></br>
    <br></br>
      <div style={boxStyle}>
        <img
          src="https://thumbs.dreamstime.com/z/set-biodegradable-waste-icon-transparent-background-set-biodegradable-waste-icon-transparent-background-197545726.jpg"
          alt="Biodegradable Waste"
          style={imageStyle}
        />
        <div style={contentStyle}>
          <h2 style={titleStyle}>Biodegradable Waste</h2>
          <p style={descriptionStyle}>
            Biodegradable waste is organic waste that can be broken down by
            natural processes. It includes materials like kitchen waste, food
            scraps, and plant-based materials.
          </p>
          <ul style={listStyle}>
            <li>Fruit and vegetable peels</li>
            <li>Food leftovers</li>
            <li>Grass clippings</li>
          </ul>
        </div>
      </div>

      <div style={boxStyle}>
        <img
          src="https://media.lendingkart.com/wp-content/uploads/2021/05/Non-Biodegradable-Waste.jpg"
          alt="Non-Biodegradable Waste"
          style={imageStyle}
        />
        <div style={contentStyle}>
          <h2 style={titleStyle}>Non-Biodegradable Waste</h2>
          <p style={descriptionStyle}>
            Non-biodegradable waste does not break down easily and can persist
            in the environment for a long time. It includes materials like
            plastics, metals, and glass.
          </p>
          <ul style={listStyle}>
            <li>Plastic bottles</li>
            <li>Metal cans</li>
            <li>Glass containers</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  padding: '20px',
  paddingTop: '50px',
};

const boxStyle = {
  width: '45%',
  border: '1px solid #ddd',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  marginBottom: '20px',
};

const imageStyle = {
  width: '100%',
  height: '500px',
  objectFit: 'cover',
};

const contentStyle = {
  padding: '20px',
};

const titleStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: '10px',
};

const descriptionStyle = {
  fontSize: '1rem',
  color: '#555',
  marginBottom: '15px',
};

const listStyle = {
  listStyleType: 'disc',
  paddingLeft: '20px',
  fontSize: '1rem',
  color: '#555',
};
