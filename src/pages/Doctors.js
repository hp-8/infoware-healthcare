import React, { useState } from 'react';
import './Doctors.css';
import doctorsData from '../Data/Doc_Data.json';
import DoctorModal from './DoctorModal';
import doctorModalData from '../Data/doctorModalData.json';

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(doctorsData); // Set initial search results to the full list
  const [selectedDoctor, setSelectedDoctor] = useState(null); // State to store the selected doctor
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      setSearchResults(doctorsData); // Set the search results back to the full list
      return;
    }

    const filteredResults = doctorsData.filter((doctor) => {
      const { Name, Location, Speciality } = doctor;
      const searchTermLowerCase = searchTerm.toLowerCase();
      return (
        Name.toLowerCase().includes(searchTermLowerCase) ||
        Location.toLowerCase().includes(searchTermLowerCase) ||
        Speciality.toLowerCase().includes(searchTermLowerCase)
      );
    });
    setSearchResults(filteredResults);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const openModal = (doctor) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedDoctor(null);
    setIsModalOpen(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="doctors-container">
      <h1 className="doctors-heading">Find a Doctor</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search for a doctor..."
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {searchResults.length > 0 ? (
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
              {searchResults.map((doctor, index) => (
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
      ) : (
        <p>No doctors found.</p>
      )}

      {selectedDoctor && (
        <DoctorModal selectedDoctor={selectedDoctor} closeModal={closeModal} doctorModalData={doctorModalData} />
      )}
    </div>
  );
};

export default Doctors;
