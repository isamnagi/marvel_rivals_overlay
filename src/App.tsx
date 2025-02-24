import React from 'react';

const App: React.FC = () => {
  console.log('App component rendered!');
  const enemyTeam = ["Iron Man", "Spider-Man", "Thor", "Hulk", "Black Widow"];

  return (
    <div style={{ 
      color: 'white', 
      backgroundColor: 'rgba(0, 0, 0, 0.9)', 
      padding: '20px', 
      borderRadius: '10px',
      width: '100%', 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>Ban Assistant</h1>
      <div>
        <h2>Enemy Team</h2>
        <ul>
          {enemyTeam.map((character, index) => (
            <li key={index}>{character}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;