import React, { useState } from 'react';
import starFilled from '../images/star-filled.png'
import starEmpty from '../images/star-empty.png'
const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        const value = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={value}
              onClick={() => handleClick(value)}
            />
            <span className={value <= rating ? 'star filled' : 'star empty'}>
              {/* &#9733; */}
    <img src={starFilled} alt="" />
            </span>
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;