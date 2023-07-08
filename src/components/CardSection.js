import React from 'react';
import './CardSection.css'

const CardSection = () => {
  return (
    <section className="col-2-cards cards-main-container border-color--purple module-container" aria-labelledby="cards-module-heading-BA25C5B487FF8E8E440B1592C076C573">
      <div className="contain module-wrap">

        <div className="module-header module-content">
          <h2 className="h2" id="cards-module-heading-BA25C5B487FF8E8E440B1592C076C573">
            <span role="text">
              <span className="content-label">Pediatric Care </span>
              Forward. For Our Children. For All Children
            </span>
          </h2>

          <p className="cards-description">Learn how the experts at Johns Hopkins All Children’s Hospital and Johns Hopkins Children's Center push the boundaries of pediatric medicine to make it possible for patients and families to fulfill those dreams.</p>
        </div>

        <ul className="cards-container col-2">
          <li className="col-2-item card-has-image card">
            <div className="card-content">
            <div className="card-media flex-wrapper">
                <img className="loading" src="https://www.hopkinsmedicine.org/johns-hopkins-childrens-center/_images/homepage/Mahi-slider-cropped.jpg" alt="Mahi playing doctor with her parent" width="80" height="80" data-was-processed="true" />
              </div>
              <div className="content">
          
                <a href="https://www.hopkinsmedicine.org/forward/jhach" className="card-link">
                  <span className="h3">Johns Hopkins All Children's Hospital</span>
                  <span className="arrow-container" aria-hidden="true">
                    <svg viewBox="0 0 24 24" focusable="false">
                      <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
                    </svg>
                  </span>
                </a>
              </div>

             
            </div>
          </li>

          <li className="col-2-item card-has-image card">
            <div className="card-content">
            <div className="card-media flex-wrapper">
                <img className="loading" src="https://www.hopkinsmedicine.org/johns-hopkins-childrens-center/_images/homepage/Lem-card-image.jpg" alt="Lem playing with an astronaut helmet" width="80" height="80" data-was-processed="true" />
              </div>
              <div className="content">
                <a href="https://www.hopkinsmedicine.org/forward/jhcc" className="card-link">
                  <span className="h3">Johns Hopkins Children's Center</span>
                  <span className="arrow-container" aria-hidden="true">
                    <svg viewBox="0 0 24 24" focusable="false">
                      <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
                    </svg>
                  </span>
                </a>
              </div>


            </div>
          </li>
        </ul>

      </div>
    </section>
  );
}

export default CardSection;
