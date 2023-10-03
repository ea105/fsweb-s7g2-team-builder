import React, { useState } from 'react';
import './App.css';
import Form from './Form'; // Form.js dosyasını içe aktarıyoruz

function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [newMember, setNewMember] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (newMember === '') {
      // Boş üye adı eklemesine izin verme
      return;
    }

    setTeamMembers([...teamMembers, newMember]);
    setNewMember('');
  }

  return (
    <div className="App">
      <h1>Üye Formu</h1>
      <Form setNewMember={setNewMember} handleSubmit={handleSubmit} /> {/* Form bileşenini kullanıyoruz */}
      <form onSubmit={handleSubmit}>
        <button type="submit">Ekle</button>
      </form>
      <ul>
        {teamMembers.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

