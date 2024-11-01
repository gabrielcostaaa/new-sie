"use client"
import EventFeedback from "@/components/EventFeedback";

type Props = {
  params: {
    avaliacoesId: string;
  };
};

export default function AvaliacoesDetalhes({ params }: Props) {
  const { avaliacoesId } = params;

  return (
    <div>
      <EventFeedback/>
    </div>
  );
}

  