import React, { useState } from 'react';
import './App.css';


function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    province: '',
    postalCode: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>Full Name: <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} /></label>
        <label>Address: <input type="text" name="address" value={formData.address} onChange={handleChange} /></label>
        <label>City: <input type="text" name="city" value={formData.city} onChange={handleChange} /></label>
        <label>Province: <input type="text" name="province" value={formData.province} onChange={handleChange} /></label>
        <label>Postal Code: <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} /></label>
        <button type="submit">Submit</button>
      </form>

      <div>
        <h2>Entered Information:</h2>
        <p>Full Name: {formData.fullName}</p>
        <p>Address: {formData.address}</p>
        <p>City: {formData.city}</p>
        <p>Province: {formData.province}</p>
        <p>Postal Code: {formData.postalCode}</p>
      </div>
    </div>
  );
}

export default App;
