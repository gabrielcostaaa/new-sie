"use client"

import { useEffect } from 'react';

type Props = {
  params: {
    avaliationId: string;
  };
};

export default function AvaliacoesDetalhes({ params: { avaliationId } }: Props) {
  
  useEffect(() => {
    console.log("Avaliation ID:", avaliationId);
  }, [avaliationId]); // O useEffect roda toda vez que o avaliationId muda

  return (
    <div>
      <p>Oi aqui é a tela de avaliações da avaliação {avaliationId}</p>
    </div>
  );
}

  