import React, { useState } from 'react';
import './appointmentForm.css'

const AppointmentForm = () => {
  const [name, setName] = useState('');
  const [complaint, setComplaint] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [heightUnit, setHeightUnit] = useState('inches');
  const [weightUnit, setWeightUnit] = useState('kg');


  const handleSubmit = (e) => {
    e.preventDefault();

    setName('');
    setComplaint('');
    setHeight('');
    setWeight('');
    setAge('');
    setMobile('');
    setEmail('');
  };

 const validateHeight = (value) =>
    height === '' || (heightUnit === 'inches' ? value > 0 && value <= 120 : value > 0 && value <= 300);

  const validateWeight = (value) =>
    weight === '' || (weightUnit === 'kg' ? value > 0 && value <= 300 : value > 0 && value <= 660);

  const isFormValid = () => validateHeight(height) && validateWeight(weight);

  return (
    <div>
      <h2>Appointment Form</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Basic Details</legend>
          <div className='basic-details'>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className='basic-details'>
            <label htmlFor="complaint">Complaint:</label>
            <textarea
              id="complaint"
              value={complaint}
              onChange={(e) => setComplaint(e.target.value)}
              required
            />
          </div>
        </fieldset>

        <fieldset>
          <legend>Vitals</legend>
          <div className="vitals">
            <label htmlFor="height">Height:</label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />
            <select
              value={heightUnit}
              onChange={(e) => setHeightUnit(e.target.value)}
              required
            >
              <option value="inches">inches</option>
              <option value="cm">cm</option>
            </select>
            {!validateHeight(height) && <p>Please enter a valid height.</p>}
          </div>
          <div className="vitals">
            <label htmlFor="weight">Weight:</label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
            <select
              value={weightUnit}
              onChange={(e) => setWeightUnit(e.target.value)}
              required
            >
              <option value="kg">kg</option>
              <option value="pounds">pounds</option>
            </select>
            {!validateWeight(weight) && <p>Please enter a valid weight.</p>}
          </div>
        </fieldset>

        <fieldset>
          <legend>About</legend>
          <div className='about'>
              <label htmlFor="age">Age:</label>
              <input
                type="number"
                id="age"
                min={0}
                max={110}
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>
          <div className='about'>
            <label htmlFor="mobile">Mobile Number:</label>
            <input
              type="tel"
              id="mobile"
              pattern="[6-9][0-9]{9}"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>
          <div className='about'>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </fieldset>

        <button type="submit" disabled={!isFormValid()}>Submit</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
