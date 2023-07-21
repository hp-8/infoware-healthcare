import React, { useState } from 'react';
import './Doctors.css';
import doctorsData from '../Data/Doc_Data.json';
import DoctorModal from './DoctorModal';

const Doctors = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const openModal = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const closeModal = () => {
    setSelectedDoctor(null);
  };

  return (
    <div className="doctors-container">
      <h1 className="doctors-heading">Find a Doctor</h1>
      <div className="results-container">
        <table>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Name</th>
              <th>Location</th>
              <th>Speciality</th>
            </tr>
          </thead>
          <tbody>
            {doctorsData.map((doctor, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <button className="doctor-name-button" onClick={() => openModal(doctor)}>
                    {doctor.Name}
                  </button>
                </td>
                <td>{doctor.Location}</td>
                <td>{doctor.Speciality}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <DoctorModal selectedDoctor={selectedDoctor} closeModal={closeModal} />
    </div>
  );
};

export default Doctors;
