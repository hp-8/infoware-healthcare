import React, { useState } from 'react';
import './CarouselContent.css'

const reviewsData = [
  {
    id: 1,
    title: 'Review 1',
    image: 'https://www.hopkinsmedicine.org/johns-hopkins-childrens-center/_images/usnwr/usnwr-23-24/640x274-jhm-slider.jpg',
    text: 'lasfdladkjfalkjfasa laksdjfalksjdf alksdjfalkdjf alksdjflakdsjf laksdjflaksdjalh alsdkjfaoiewo',
  },
  {
    id: 2,
    title: 'Review 2',
    image: 'https://www.hopkinsmedicine.org/_includes/_images/somconvocation23-homepage.jpg',
    text: 'This is the second review.',
  },
  {
    id: 3,
    title: 'Review 3',
    image: 'https://www.hopkinsmedicine.org/sebin/l/y/USN2207005_SC_homepage-slider-640x274.png',
    text: 'This is the third review.',
  },
  {
    id: 4, 
    title: 'Review 4',
    image: 'https://www.hopkinsmedicine.org/sebin/x/b/bayview-bus.jpg',
    text: 'This is the fourth review.',
  },
  {
    id: 5,
    title: 'Review 5',
    image: 'https://www.hopkinsmedicine.org/sebin/n/l/vaccine.jpg',
    text: 'This is the fifth review.',
  },
  {
    id: 6,
    title: 'Review 6',
    image: 'https://www.hopkinsmedicine.org/sebin/v/b/wayfinding-slider.png',
    text: 'This is the sixth review.',
  },
  {
    id: 7,
    title: 'Review 7',
    image: 'https://www.hopkinsmedicine.org/sebin/p/w/new-mychart-features.png',
    text: 'This is the seventh review.',
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
