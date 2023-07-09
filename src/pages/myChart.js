import React, { useState } from 'react';
import './myChart.css'

function MyChart() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
    // Perform login logic here
  };

  return (
    <div className="my-chart">
      <h2>MyChart Login</h2>
      <p>Welcome to MyChart, a secure online portal that allows you to access your health information and communicate with your healthcare providers.</p>
      <p>Please enter your username and password to log in.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="#">Sign up</a></p>
      <p>MyChart is a service provided by Johns Hopkins Medicine. By using this service, you agree to the <a href="#">terms and conditions</a>.</p>
    </div>
  );
} 

export default MyChart;