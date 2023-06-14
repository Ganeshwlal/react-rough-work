import React, { useState } from 'react'
import { Button, Card, Form, Row } from 'react-bootstrap'
import { register } from '../Services/apiService';
import { useNavigate } from 'react-router-dom';


function Register() {

    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();

      const data = new FormData()
        data.append("name",name)
        data.append("email",email)
        data.append("password",password)

        const headerConfig = {
            "content-type":"application/json"
        }

        const response = await register(data,headerConfig)
        console.log(response);

        navigate("/login")
    };

    console.log(name);
    console.log(email);
    console.log(password);
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    );
}

export default Register