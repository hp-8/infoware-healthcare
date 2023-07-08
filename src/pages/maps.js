import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

function Map({ latitude, longitude }) {
  const mapRef = useRef(null);

  useEffect(() => {
    mapRef.current = L.map('map', {
      center: [latitude, longitude],
      zoom: 12,
      layers: [
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: 'Map data &copy; OpenStreetMap contributors',
        }),
      ],
    });

    L.marker([latitude, longitude]).addTo(mapRef.current);

    return () => {
      mapRef.current?.remove();
    };
  }, [latitude, longitude]);

  return <div id="map" style={{ height: '400px' }}></div>;
}

export default Map;
