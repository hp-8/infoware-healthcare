import React, { useState } from 'react';
import './appointmentForm.css';

const AppointmentForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [complaint, setComplaint] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [heightUnit, setHeightUnit] = useState('inches');
  const [weightUnit, setWeightUnit] = useState('kg');
  const [gender, setGender] = useState('');

  const [isFirstNameValid, setIsFirstNameValid] = useState(true);
  const [isLastNameValid, setIsLastNameValid] = useState(true);
  const [isAgeValid, setIsAgeValid] = useState(true);

  const [firstNameTouched, setFirstNameTouched] = useState(false);
  const [lastNameTouched, setLastNameTouched] = useState(false);
  const [complaintTouched, setComplaintTouched] = useState(false);
  const [heightTouched, setHeightTouched] = useState(false);
  const [weightTouched, setWeightTouched] = useState(false);
  const [ageTouched, setAgeTouched] = useState(false);
  const [mobileTouched, setMobileTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [genderTouched, setGenderTouched] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !complaint || !height || !weight || !age || !mobile || !gender) {
      alert('Please fill in all mandatory fields.');
      return;
    }

    setFirstName('');
    setLastName('');
    setComplaint('');
    setHeight('');
    setWeight('');
    setAge('');
    setMobile('');
    setEmail('');
    setGender('');
    setIsFirstNameValid(true);
    setIsLastNameValid(true);
    setIsAgeValid(true);

    // Reset the "touched" state for all fields after form submission
    setFirstNameTouched(false);
    setLastNameTouched(false);
    setComplaintTouched(false);
    setHeightTouched(false);
    setWeightTouched(false);
    setAgeTouched(false);
    setMobileTouched(false);
    setEmailTouched(false);
    setGenderTouched(false);
  };

  const validateHeight = (value) =>
    height === '' || (heightUnit === 'inches' ? value > 0 && value <= 120 : value > 0 && value <= 300);

  const validateWeight = (value) =>
    weight === '' || (weightUnit === 'kg' ? value > 0 && value <= 300 : value > 0 && value <= 660);

    const handleFirstNameChange = (e) => {
      const { value } = e.target;
      setFirstName(value);
      // Allow only alphabets in First Name
      setIsFirstNameValid(/^[A-Za-z]*$/.test(value));
    };
  
    const handleLastNameChange = (e) => {
      const { value } = e.target;
      setLastName(value);
      // Allow only alphabets in Last Name
      setIsLastNameValid(/^[A-Za-z]*$/.test(value));
    };
  
    const handleAgeChange = (e) => {
      const { value } = e.target;
      setAge(value);
      // Validate Age within the range of 0 to 110
      setIsAgeValid(value === '' || (Number(value) >= 0 && Number(value) <= 110));
    };
  
    const isFormValid = () =>
      isFirstNameValid && isLastNameValid && isAgeValid && !!complaint && !!height && !!weight && !!age && !!mobile && !!gender;
  

  return (
    <div className="appointment-form">
      <h2>Appointment Form</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Basic Details</legend>
          <div className="name-fields">
            <div className="basic-details">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                onBlur={() => setFirstNameTouched(true)}
                required
              />
              {firstNameTouched && !firstName && <p className="error-message">Please enter your First Name.</p>}
            </div>
            <div className="basic-details">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                onBlur={() => setLastNameTouched(true)}
                required
              />
              {lastNameTouched && !lastName && <p className="error-message">Please enter your Last Name.</p>}
            </div>
          </div>
          <div className="basic-details">
            <label htmlFor="complaint">Complaint:</label>
            <textarea
              id="complaint"
              value={complaint}
              onChange={(e) => setComplaint(e.target.value)}
              onBlur={() => setComplaintTouched(true)}
              required
            />
            {complaintTouched && !complaint && <p className="error-message">Please enter your complaint.</p>}
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
            onBlur={() => setHeightTouched(true)}
            required
          />
          <select value={heightUnit} onChange={(e) => setHeightUnit(e.target.value)} required>
            <option value="inches">inches</option>
            <option value="cm">cm</option>
          </select>
          {heightTouched && !validateHeight(height) && <p className="error-message">Please enter a valid height.</p>}
        </div>
        <div className="vitals">
          <label htmlFor="weight">Weight:</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            onBlur={() => setWeightTouched(true)}
            required
          />
          <select value={weightUnit} onChange={(e) => setWeightUnit(e.target.value)} required>
            <option value="kg">kg</option>
            <option value="pounds">pounds</option>
          </select>
          {weightTouched && !validateWeight(weight) && <p className="error-message">Please enter a valid weight.</p>}
        </div>
      </fieldset>

        <fieldset>
          <legend>About</legend>
          <div className="about">
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              min={0}
              max={110}
              value={age}
              onChange={(e) => setAge(e.target.value)}
              onBlur={() => setAgeTouched(true)}
              required
            />
            {ageTouched && !age && <p className="error-message">Please enter your age.</p>}
          </div>
          <div className="about">
            <label htmlFor="mobile">Mobile Number:</label>
            <input
              type="tel"
              id="mobile"
              pattern="[6-9][0-9]{9}"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              onBlur={() => setMobileTouched(true)}
              required
            />
            {mobileTouched && !mobile && <p className="error-message">Please enter a valid mobile number.</p>}
          </div>
          <div className="about">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            {/* Add validation for email if needed */}
          </div>
          <div className="about">
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              onBlur={() => setGenderTouched(true)}
              required
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {genderTouched && !gender && <p className="error-message">Please select your gender.</p>}
          </div>
        </fieldset>

        <button type="submit" disabled={!isFormValid()}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;