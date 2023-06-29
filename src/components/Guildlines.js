import React from 'react';
import './Guidelines.css';

const Guidelines = () => {
  return (
    <div className="two-col-teaser module-wrap">
      <div className="teaser-content">
        <div className="content-title module-content">
          <h2>Updated COVID-19 Guidelines</h2>
        </div>

        <div className="content-body module-content">
          <ul>
            <li>Masking is strongly recommended but no longer required in all Johns Hopkins Medicine buildings.</li>
            <li>Care partners and visitors: Please do not visit if you have fever, upper respiratory symptoms, or COVID-19.</li>
            <li>Patients: Please wear a mask if you have upper respiratory symptoms or fever.</li>
          </ul>
        </div>

        <div className="content-link module-content">
          <span className="link">
            <a className="btn-chevron btn--linkblue" href="https://www.hopkinsmedicine.org/coronavirus/for-johns-hopkins-patients.html">
              Learn about all updates
            </a>
          </span>
        </div>
      </div>

      <div className="teaser-img">
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
