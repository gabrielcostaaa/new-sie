"use client"

import { useEffect } from 'react';
import EventFeedback from "@/components/EventFeedback";

type Props = {
  params: {
    avaliacoesId: string;
  };
};

export default function AvaliacoesDetalhes({ params }: Props) {
  const { avaliacoesId } = params;

  useEffect(() => {
    console.log("avaliacoes ID:", avaliacoesId);
  }, [avaliacoesId]); // O useEffect roda toda vez que o avaliacoesId muda

  return (
    <div>
      <p>Oi aqui é a tela de avaliações da avaliação {avaliacoesId}</p>
      <EventFeedback/>
    </div>
  );
}

  