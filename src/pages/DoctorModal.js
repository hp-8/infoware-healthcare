import React from 'react';
import './DoctorModal.css';

const DoctorModal = ({ selectedDoctor, closeModal }) => {
  if (!selectedDoctor) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {selectedDoctor.image && <img className='doctor-img' src={selectedDoctor.image} alt={selectedDoctor.Name} />}
        <h2>{selectedDoctor.Name}</h2>
        <div className='deets'>
          <div className='row1'>
            <div className='deet-container'> 
          <p className='attribute'>Qualification: </p> <p className='detail'>{selectedDoctor.Qualification}</p>
            </div>
            <div className='deet-container'>
          <p className='attribute'>Location:</p> <p className='detail'>{selectedDoctor.Location}</p>
            </div>
          </div>

          <div className='row2'>

            <div className='deet-container'>
          <p className='attribute'>Speciality: </p> <p className='detail'>{selectedDoctor.Speciality}</p>
            </div>
            <div className='deet-container'>
          <p className='attribute'>Available Hours: </p> <p className='detial'>{selectedDoctor.AvailableHours}</p>
          </div>
          </div>

          <div className='row3'>
          <p className='attribute'>Contact Number: </p> <p className='detail'> {selectedDoctor.ContactNumber}</p>
          </div>
          
        </div>
        <button className='close-button' onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default DoctorModal;
