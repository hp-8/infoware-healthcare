import React, { useState, useEffect } from 'react';
import Map from './maps';
import './location.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

function Location() {
  const [location, setLocation] = useState('');
  const [userLatitude, setUserLatitude] = useState(null);
  const [userLongitude, setUserLongitude] = useState(null);
  const [mapInitialized, setMapInitialized] = useState(false);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`${latitude}, ${longitude}`);
          setUserLatitude(latitude);
          setUserLongitude(longitude);
  
         
          if (!mapInitialized) {
            setMapInitialized(true);
          }
        },
        (error) => {
          console.error('Geolocation error:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  useEffect(() => {
    if (mapInitialized && userLatitude && userLongitude) {
      const map = L.map('map', {
        center: [userLatitude, userLongitude],
        zoom: 12,
        layers: [
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; OpenStreetMap contributors',
          }),
        ],
      });

      L.marker([userLatitude, userLongitude]).addTo(map);
    }
  }, [mapInitialized, userLatitude, userLongitude]);
  

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('User location:', location);
  };

  return (
    <div className="location-container">
      <h2 className="location-heading">Enter your location:</h2>
      <form className="location-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={location}
          onChange={handleLocationChange}
          className="location-input"
          placeholder="Enter your location"
        />
        <div>
          <button
            type="button"
            onClick={handleGeolocation}
            className="location-button location-button-primary"
          >
            Use Current Location
          </button>
          <button
            type="submit"
            className="location-button location-button-success"
          >
            Submit
          </button>
        </div>
      </form>
      {userLatitude && userLongitude && (
        <div className="map-container">
            
          <Map latitude={userLatitude} longitude={userLongitude} />
        </div>
      )}
    </div>
  );
}

export default Location;
