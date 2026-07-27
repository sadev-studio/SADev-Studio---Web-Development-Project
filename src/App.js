import { useState } from "react";

function App() {
  const [name, setName] = useState(
    localStorage.getItem('name') || ''
  );

  function saveName() {
    localStorage.setItem('name', name);
    alert('Name saved!');
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>local Storage App</h1>
      <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Apna Naam Likho..."
      style={{ padding: '10px', fontSize: '16px' }} />

      <button onClick={saveName} style={{
        marginLeft: '10px',
        padding: '10px 20px',
        background: '#f0a500',
        border: 'none',
        borderRadius: '6px',
        fontWeight: 'bold',
        cursor: 'pointer',
      }}>
        save
        </button>
        <p style={{ marginTop: '20px', color: '#aaa' }}>
          Page refresh kro - naam wahi rahega!
          </p>
      </div>
  );
}

export default App;