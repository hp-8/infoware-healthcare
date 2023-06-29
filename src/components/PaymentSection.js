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
                  <a href="https://www.hopkinsmedicine.org/patient_care/patients-visitors/billing-insurance/cost-estimates.html">
                    Estimate Your Bill
                  </a>
                  : Create an online estimate for the hospital fee portion of your care.
                </li>
                <li>
                  <a href="https://www.hopkinsmedicine.org/patient_care/patients-visitors/billing-insurance/pay-bill/index.html">
                    Pay Your Bill
                  </a>
                  : Pay your bill online or by phone. Contact us with questions.
                </li>
                <li>
                  <a href="https://www.hopkinsmedicine.org/patient_care/patients-visitors/billing-insurance/pay-bill/charges-fees.html">
                    Federal Price Transparency
                  </a>
                  : View the list of standard hospital charges.
                </li>
                <li>
                  <a href="https://www.hopkinsmedicine.org/patient_care/patients-visitors/billing-insurance/insurance-info.html">
                    Insurance Information
                  </a>
                  : Review the list of insurance plans we accept.
                </li>
                <li>
                  <a href="https://www.hopkinsmedicine.org/patient_care/patients-visitors/billing-insurance/financial-assistance.html">
                    Financial Assistance
                  </a>
                  : Explore ways to get help paying your medical bills. Learn about payment plans.
                </li>
                <li>
                  <a href="https://www.hopkinsmedicine.org/patient_care/patients-visitors/billing-insurance/no-surprises-act.html">
                    No Surprises Act
                  </a>
                  : Learn about a new right you have as a patient.
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
