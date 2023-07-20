import React from 'react';
import { useNavigate } from 'react-router-dom';
import './appointment.css';
import { Link } from 'react-router-dom';


const Appointments = () => {
  const navigate = useNavigate();

  const handleScheduleClick = () => {
    navigate('/appointmentform');
  };

  return (
    <div className="appointment-form-container">
      <h2 className="app-h2">Schedule An Appointment</h2>
      <div className="text-container-ap">
        <div className="text-content-ap">
          <p className='filler'>
            Many providers and specialists offer online appointment scheduling through MyChart. Anyone who has sought
            care at a Johns Hopkins Medicine facility in the last few years can activate a MyChart account. Learn about
           MyChart. 
          </p>
        </div>

        <div className="text-content-ap">
          <p className='filler'>
            Appointments are available to current Johns Hopkins Medicine patients. For some care appointments, you must
            be an existing patient of the practice or care service to schedule online.
          </p>
        </div>
      </div>

      <button className="ScheduleApp" onClick={handleScheduleClick}>
        Schedule
      </button>
    </div>
  );
};

export default Appointments;
