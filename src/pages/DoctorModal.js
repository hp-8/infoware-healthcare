import React from 'react';
import './DoctorModal.css';

const DoctorModal = ({ selectedDoctor, closeModal, doctorModalData }) => {
  if (!selectedDoctor) {
    return null;
  }

  const doctorInfo = doctorModalData.find((doctor) => doctor.Name === selectedDoctor.Name);

  // Check if the doctorInfo is found, otherwise return null
  if (!doctorInfo) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={selectedDoctor.image} alt={selectedDoctor.Name} />
        <h2>{selectedDoctor.Name}</h2>
        <p>Qualification: {doctorInfo.Qualification}</p>
        <p>Location: {doctorInfo.Location}</p>
        <p>Speciality: {doctorInfo.Speciality}</p>
        <p>Available Hours: {doctorInfo.AvailableHours}</p>
        <p>Contact Number: {doctorInfo.ContactNumber}</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default DoctorModal;
