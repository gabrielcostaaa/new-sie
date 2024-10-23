// StarRating.js
'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';

const StarRating = ({ onChange, rating }) => {
  const [hoverRating, setHoverRating] = useState(0);
  const [click, setClick] = useState(false);

  const handleMouseEnter = (value) => {
    if (!click) {
      setHoverRating(value);
    }
  };

  const handleMouseLeave = () => {
    if (!click) {
      setHoverRating(0);
    }
  };

  const handleClick = (value) => {
    setClick(true);
    onChange(value);
  };

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((value) => (
        <div
          key={value}
          onMouseEnter={() => handleMouseEnter(value)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(value)}
        >
          <Star
            className={`cursor-pointer ${value <= (click ? rating : hoverRating) ? 'text-yellow-500' : 'text-gray-300'}`}
            size={38}
          />
        </div>
      ))}
    </div>
  );
};

export default StarRating;

