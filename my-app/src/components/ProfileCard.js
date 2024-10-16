import React from 'react';

export const ProfileCard = ({ name, bio, imageUrl, githubUrl }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '2rem',
      display: 'flex',
      alignItems: 'center',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff',
      marginBottom: '2rem',
    }}>
      <img
        src={imageUrl}
        alt={`${name}'s Profile`}
        style={{
          borderRadius: '50%',
          width: '100px',
          height: '100px',
          marginRight: '1.5rem',
        }}
      />
      <div>
        <h2 style={{ margin: 0, color: '#000' }}>{name}</h2>
        <p style={{ color: '#555' }}>{bio}</p>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            {githubUrl}
          </a>
        </div>
      </div>
    </div>
  );
};
