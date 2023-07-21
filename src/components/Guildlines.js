import React from 'react';
import './Guidelines.css';

const Guidelines = () => {
  return (
    <div className="two-col-teaser-g module-wrap-g">
      <div className="teaser-content-g">
        <div className="content-title-g module-content-g">
          <h2>Updated COVID-19 Guidelines</h2>
        </div>

        <div className="content-body-g module-content-g">
          <ul>
            <li>Masking is strongly recommended but no longer required in all The InfoWare House Medicine buildings.</li>
            <li>Care partners and visitors: Please do not visit if you have fever, upper respiratory symptoms, or COVID-19.</li>
            <li>Patients: Please wear a mask if you have upper respiratory symptoms or fever.</li>
          </ul>
        </div>

        <div className="content-link-g module-content-g">
          <span className="link">
            <a className="btn-chevron btn--linkblue" href="#">
              Learn about all updates
            </a>
          </span>
        </div>
      </div>

      <div className="teaser-img-g">
        <img
          src="https://www.hopkinsmedicine.org/_includes/coronavirus640.jpg"
          alt="coronavirus cells"
          className="loaded"
          data-was-processed="true"
        />
      </div>
    </div>
  );
};

export default Guidelines;