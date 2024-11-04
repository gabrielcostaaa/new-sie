'use client';

import StarRating from './StarRating';
import { useEffect, useState } from 'react';
import EmojiFeedback from './EmojiFeedback';
import { Button } from './ui/button';
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"; // Ajuste o caminho se necessário
import { AvaliationEvent } from '@/backend/avaliacoes/RepositorioAvaliacoes';
import { findUserProfile } from '@/backend/usuario/RepositorioUsuario';
import UserProfile from './UserProfile';

const EventFeedback = ({ event_id, session_user }) => {
  const event_id_number = Number(event_id);

  const [ratings, setRatings] = useState({
    estrutura: 0,
    organizacao: 0,
    conteudo: 0,
    palestrantes: 0,
  });

  const [totalRating, setTotalRating] = useState(0);
  const [userProfile, setUserProfile] = useState(null); // Para armazenar o perfil do usuário
  const [feedback, setFeedback] = useState(''); // Para armazenar feedback do usuário

  useEffect(() => {
    // Função para buscar o perfil do usuário
    const fetchUserProfile = async () => {
      if (session_user && session_user?.user.email) {
        const profile = await findUserProfile(session_user?.user.email);
        setUserProfile(profile); // Armazena o perfil do usuário no estado
        console.log(userProfile)
      } else {
        console.log("Problemas com a sessão do usuário");
      }
    };

    fetchUserProfile(); // Chama a função para buscar o perfil
  }, [session_user]);

  const handleRatingChange = (value, criteria) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [criteria]: value,
    }));
  };

  useEffect(() => {
    const sum = Object.values(ratings).reduce((acc, curr) => acc + curr, 0);
    setTotalRating(sum);
  }, [ratings]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (userProfile) {
      try {

        await AvaliationEvent(event_id_number, userProfile.user_id, ratings, totalRating, feedback);
        // Limpa os campos após a avaliação
        setRatings({
          estrutura: 0,
          organizacao: 0,
          conteudo: 0,
          palestrantes: 0,
        });
        setTotalRating(0);
        setFeedback('');
      } catch (error) {
        console.error("Erro ao enviar avaliação:", error);
      }
    } else {
      console.error("Usuário não encontrado.");
    }
  };

  return (
    <TooltipProvider>
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Avalie o evento</h3>
        <div className="space-y-4">
          {['estrutura', 'organizacao', 'conteudo', 'palestrantes'].map((criteria) => (
            <div key={criteria}>
              <Tooltip>
                <TooltipTrigger>
                  <h4 className="text-lg font-medium text-gray-700 hover:underline cursor-pointer">
                    {criteria.charAt(0).toUpperCase() + criteria.slice(1)}
                  </h4>
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                  Avalie {criteria === 'estrutura' ? 'a infraestrutura do evento, considerando fatores como espaço, capacidade, qualidade do ambiente e conforto dos participantes' :
                      criteria === 'organizacao' ? 'a organização do evento, considerando a eficiência na gestão de filas e a clareza das informações fornecidas aos participantes' :
                      criteria === 'conteudo' ? 'a relevância e a profundidade do conteúdo apresentado no evento e se ele corresponde às expectativas em relação aos temas abordados' : 
                      'os palestrantes do evento, considerando a clareza na comunicação, o domínio dos temas abordados e a capacidade de engajar e interagir com o público'}.
                  </p>
                </TooltipContent>
              </Tooltip>
              <StarRating
                rating={ratings[criteria]}
                onChange={(value) => handleRatingChange(value, criteria)}
              />
            </div>
          ))}
        </div>
        <EmojiFeedback rating={totalRating} />
        <div className='mt-6'>
          <label className="block text-gray-700 mb-2">Escreva abaixo feedbacks sobre o evento, elogios, melhorias, o que for</label>
          <Textarea
            className='mt-2 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)} // Atualiza o feedback do usuário
          />
        </div>
        <Button className='mt-5' onClick={handleSubmit}>Avaliar</Button>
      </div>
    </TooltipProvider>
  );
};

export default EventFeedback;
