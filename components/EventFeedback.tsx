'use client';

import StarRating from './StarRating';
import { useEffect, useState } from 'react';
import EmojiFeedback from './EmojiFeedback';

const EventFeedback = () => {

  const [ratings, setRatings] = useState({
    estrutura: 0,
    organizacao: 0,
    conteudo: 0,
    palestrantes: 0,
  });

  const handleRatingChange = (value, criteria) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [criteria]: value,
    }));
    console.log("Rating submitted for", criteria, ": ", value);
  };

  const [totalRating, setTotalRating] = useState(0)

  useEffect(() => {
    const sum = Object.values(ratings).reduce((acc, curr) => acc + curr, 0)
    setTotalRating(sum)
    console.log("Total:", sum)
  }, [ratings])

  return (
    <div>
      <h3>Avalie o evento</h3>
      <div>
        <h4>Estrutura</h4>
        <StarRating rating={ratings.estrutura} onChange={(value) => handleRatingChange(value, 'estrutura')} />
      </div>
      <div>
        <h4>Organização</h4>
        <StarRating rating={ratings.organizacao} onChange={(value) => handleRatingChange(value, 'organizacao')} />
      </div>
      <div>
        <h4>Conteúdo</h4>
        <StarRating rating={ratings.conteudo} onChange={(value) => handleRatingChange(value, 'conteudo')} />
      </div>
      <div>
        <h4>Palestrantes</h4>
        <StarRating rating={ratings.palestrantes} onChange={(value) => handleRatingChange(value, 'palestrantes')} />
      </div>
      <EmojiFeedback rating={totalRating}/>
    </div>
  );
};

export default EventFeedback;
