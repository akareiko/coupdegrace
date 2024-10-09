import React, { useState } from 'react';

const RegistrationForm = () => {
  // State to store form data
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload

    // Prepare the data to send
    const userData = {
      username: username,
      password: password
    };

    try {
      // Send a POST request to the server
      const response = await fetch('http://43.201.250.98/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      });

      // Get the response data
      const result = await response.json();
      setMessage(result.message); // Display success or error message
    } catch (error) {
      setMessage('Error registering user');
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username" style={{ display: 'block', marginBottom: '5px', color: '#ffffff' }}>Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', color: '#ffffff' }}>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <br />
        <button type="submit" style={{ display: 'block', marginBottom: '5px', color: '#ffffff' }}>Register</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default RegistrationForm;
