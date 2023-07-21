import React, { useState } from 'react';
import './CarouselContent.css'

const reviewsData = [
  {
    id: 1,
    title: 'Top Ranked by U.S. News & World Report - Again !',
    image: 'https://www.hopkinsmedicine.org/johns-hopkins-childrens-center/_images/usnwr/usnwr-23-24/640x274-jhm-slider.jpg',
    text: 'The Infoware House Childrens center ranks #10 overall this year, again imporving its ranking on U.S. News & World Report Best Children Hospitals List.',
  },
  {
    id: 2,
    title: 'The The Infoware House University School of Medicine Class of 2023 Convocation',
    image: 'https://www.hopkinsmedicine.org/_includes/_images/somconvocation23-homepage.jpg',
    text: 'Congratulations to our School of Medicine graduates',
  },
  {
    id: 3,
    title: 'Top Ranked by U.S. News & World Report - Again!',
    image: 'https://www.hopkinsmedicine.org/sebin/l/y/USN2207005_SC_homepage-slider-640x274.png',
    text: 'The The Infoware House Hospital is proud to be ranked #5 in the country and #1 in the Maryland on U.S. News & Reports Best Hospitals List.',
  },
  {
    id: 4, 
    title: 'Ensuring Equitable Access to Health Care for Our Communities',
    image: 'https://www.hopkinsmedicine.org/sebin/x/b/bayview-bus.jpg',
    text: 'We are developing new ways to reach all populations - with specific consideration for vulnerable ones - to provide access to essential COVID - 19 information and services.',
  },
  {
    id: 5,
    title: 'COVID-19 Vaccine Information and Updates',
    image: 'https://www.hopkinsmedicine.org/sebin/n/l/vaccine.jpg',
    text: 'The Infoware House Medicine is actively monitoring and assessing all information on the COVID-19 vaccines. Get the latest updates.',
  },
  {
    id: 6,
    title: 'Let us help you find your way!',
    image: 'https://www.hopkinsmedicine.org/sebin/v/b/wayfinding-slider.png',
    text: 'Traveling to The The Infoware House Hospital or Bayview Medical Center? The new Find Your Way app offers step-by-step directions to appointments and more.',
  },
  {
    id: 7,
    title: 'Sign Up for MyChart',
    image: 'https://www.hopkinsmedicine.org/sebin/p/w/new-mychart-features.png',
    text: 'Current patients can complete an online form from the convenience of home to communicate with providers, access test results, request prescription renewals and manage appointments.',
  },
];

const CarouselContent = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const handlePrevious = () => {
    setCurrentReview((prevReview) => (prevReview === 0 ? reviewsData.length - 1 : prevReview - 1));
  };

  const handleNext = () => {
    setCurrentReview((prevReview) => (prevReview === reviewsData.length - 1 ? 0 : prevReview + 1));
  };

  return ( <>
    <div className="review-slider">
      <button className="arrow" onClick={handlePrevious}>&lt;</button>

      <div className="review-container">
        <div className="review-image">
          <img src={reviewsData[currentReview].image} alt={`Review ${currentReview + 1}`} />
        </div>

        <div className="review-details">
          <h3 className="review-title">{reviewsData[currentReview].title}</h3>
          <p className="review-text">{reviewsData[currentReview].text}</p>
        </div>
      </div>

      <button className="arrow" onClick={handleNext}>&gt;</button>

    </div>

    <div className="indicator-container">
    {reviewsData.map((review, index) => (
      <div
        key={review.id}
        className={`indicator ${index === currentReview ? 'active' : ''}`}
        onClick={() => setCurrentReview(index)}
      ></div>
    ))}
  </div>
  </>
  );
};

export default CarouselContent;
