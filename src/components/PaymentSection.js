import React from 'react';
import './PaymentSection.css';

const PaymentSection = () => {
  return (
    <div className="featured-content-block-module module-container teaser-primary">
      <div className="two-col-teaser module-wrap">
        <div className="teaser-content">
          <div className="content-title module-content">
            <h2>Payments and Billing Assistance</h2>
          </div>

          <div className="content">
            <div className="content-body module-content">
              <ul>
                <li>
                  <a href="#">
                    Estimate Your Bill
                  </a>
                  : Create an online estimate for the hospital fee portion of your care.
                </li>
                <li>
                  <a href="#">
                    Pay Your Bill
                  </a>
                  : Pay your bill online or by phone. Contact us with questions.
                </li>
                <li>
                  <a href="#">
                    Financial Assistance
                  </a>
                  : Explore ways to get help paying your medical bills. Learn about payment plans.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="teaser-img">
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
