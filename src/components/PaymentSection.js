import React from 'react';
import './PaymentSection.css';

const PaymentSection = () => {
  return (
    <div className="featured-content-block-module module-container teaser-primary">
      <div className="two-col-teaser module-wrap-ps">
        <div className="teaser-content-ps">
          <div className="content-title-ps module-content">
            <h2>Payments and Billing Assistance</h2>
          </div>

          <div className="content-ps">
            <div className="content-body-ps module-content">
              <ul>
                <li>
                  <span className='content-header'>
                    Estimate Your Bill
                  </span>                
                  : Create an online estimate for the hospital fee portion of your care.
                </li>
                <li>
                  <span className='content-header'>
                    Pay Your Bill
                  </span>
                  : Pay your bill online or by phone. Contact us with questions.
                </li>
                <li>
                  <span className='content-header'>
                    Financial Assistance
                  </span>
                  : Explore ways to get help paying your medical bills. Learn about payment plans.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="teaser-img-ps">
          <img
            src="https://www.hopkinsmedicine.org/_includes/_images/billing-hero.jpg"
            alt=""
            className="loading"
            data-was-processed="true"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;

