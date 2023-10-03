import React, { useState } from 'react';

function Form() {
  // Form alanları için state değerlerini tanımlayın
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  // Form gönderildiğinde yapılacak işlemi tanımlayın
  const handleSubmit = (e) => {
    e.preventDefault();

    // Form verilerini kullanarak istediğiniz işlemi gerçekleştirin
    console.log('Ad:', name);
    console.log('Email:', email);
    console.log('Rol:', role);

    // Formu temizle
    setName('');
    setEmail('');
    setRole('');
  };

  return (
    <div>
      <h2>Üye Ekle</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">İsim:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="role">Rol:</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Seçiniz</option>
            <option value="backend-engineer">Backend Engineer</option>
            <option value="frontend-engineer">Frontend Engineer</option>
            <option value="designer">Tasarımcı</option>
            {/* İstediğiniz rol seçeneklerini ekleyebilirsiniz */}
          </select>
        </div>
        <div>
          <button type="submit">Ekle</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
