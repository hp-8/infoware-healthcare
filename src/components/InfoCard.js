import React from 'react';
import './InfoCard.css'; // Import the CSS file for styling

const InfoCard = () => {
  const infoCards = [
    {
      title: "Doctors",
      description: "Search for doctors by name, specialty, or location.",
      link: "https://www.hopkinsmedicine.org/profiles/",
      icon: "https://www.hopkinsmedicine.org/_images/_svg/stethoscope-blue.svg"
    },
    
    {
      title: "Locations",
      description: "Find care in an area convenient to you.",
      link: "https://www.hopkinsmedicine.org/patient_care/locations/",
      icon: "https://www.hopkinsmedicine.org/_images/_svg/location-blue.svg"
    },

    {
      title: "Appointments",
      description: "Schedule an appointment online.",
      link: "https://www.hopkinsmedicine.org/patient_care/johns_hopkins_medicine_request_appointment.html",
      icon: "https://www.hopkinsmedicine.org/_images/_svg/appointment-blue.svg"
    },

    {
      title: "MyChart", 
      description: "View test results, schedule most appointments, and more.",
      link: "https://www.hopkinsmedicine.org/mychart/",
      icon: "https://www.hopkinsmedicine.org/_images/_svg/mychart-blue.svg"
    }
  ];

  return (
    <div className='Card-container'>
      {infoCards.map((card, index) => (
        <div className="card" key={index}>
          <div className="card-content">
            <div className="card-media">
              <img className="icon" src={card.icon} alt="card icon" />
            </div>
            <div className="content">
              <a href={card.link} className="card-link">
                <h2>{card.title}</h2>
                <span className="arrow-container" aria-hidden="true">
                  <svg viewBox="0 0 24 24" focusable="false">
                    <path
                      fill="currentColor"
                      d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                    ></path>
                  </svg>
                </span>
              </a>
              <div className="details">
                <p>{card.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoCard;
