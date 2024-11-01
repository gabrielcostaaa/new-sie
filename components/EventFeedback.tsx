'use client';

import StarRating from './StarRating';
import { useEffect, useState } from 'react';
import EmojiFeedback from './EmojiFeedback';
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"; // Ajuste o caminho se necessário

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

  const [totalRating, setTotalRating] = useState(0);

  useEffect(() => {
    const sum = Object.values(ratings).reduce((acc, curr) => acc + curr, 0);
    setTotalRating(sum);
    console.log("Total:", sum);
  }, [ratings]);

  return (
    <TooltipProvider>
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Avalie o evento</h3>
        <div className="space-y-4">
          <div>
            <Tooltip>
              <TooltipTrigger>
                <h4 className="text-lg font-medium text-gray-700 hover:underline cursor-pointer">
                  Estrutura
                </h4>
              </TooltipTrigger>
              <TooltipContent>
                <p>Avalie a infraestrutura do evento, considerando fatores como espaço, capacidade, qualidade do ambiente e conforto dos participantes.</p>
              </TooltipContent>
            </Tooltip>
            <StarRating rating={ratings.estrutura} onChange={(value) => handleRatingChange(value, 'estrutura')} />
          </div>
          <div>
            <Tooltip>
              <TooltipTrigger>
                <h4 className="text-lg font-medium text-gray-700 hover:underline cursor-pointer">
                  Organização
                </h4>
              </TooltipTrigger>
              <TooltipContent>
                <p>Avalie a organização do evento, incluindo a logística.</p>
              </TooltipContent>
            </Tooltip>
            <StarRating rating={ratings.organizacao} onChange={(value) => handleRatingChange(value, 'organizacao')} />
          </div>
          <div>
            <Tooltip>
              <TooltipTrigger>
                <h4 className="text-lg font-medium text-gray-700 hover:underline cursor-pointer">
                  Conteúdo
                </h4>
              </TooltipTrigger>
              <TooltipContent>
                <p>Avalie a qualidade do conteúdo apresentado.</p>
              </TooltipContent>
            </Tooltip>
            <StarRating rating={ratings.conteudo} onChange={(value) => handleRatingChange(value, 'conteudo')} />
          </div>
          <div>
            <Tooltip>
              <TooltipTrigger>
                <h4 className="text-lg font-medium text-gray-700 hover:underline cursor-pointer">
                  Palestrantes
                </h4>
              </TooltipTrigger>
              <TooltipContent>
                <p>Avalie a performance dos palestrantes.</p>
              </TooltipContent>
            </Tooltip>
            <StarRating rating={ratings.palestrantes} onChange={(value) => handleRatingChange(value, 'palestrantes')} />
          </div>
        </div>
        <EmojiFeedback rating={totalRating} />
        <div className='mt-6'>
          <label className="block text-gray-700 mb-2">Escreva abaixo feedbacks sobre o evento, elogios, melhorias, o que for</label>
          <Textarea className='mt-2 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500' />
        </div>
      </div>
    </TooltipProvider>
  );
};

export default EventFeedback;

