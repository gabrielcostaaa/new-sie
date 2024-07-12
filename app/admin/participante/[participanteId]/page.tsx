import { Button } from "@/components/ui/button";

type Props = {
    params: {
        participanteId: string;
    };
};

export default function ParticipanteDetalhes({ params: { participanteId } }: Props) {
  return (
    <>
    <h1>Aqui a página principal da visualização de um Participante específico</h1>
    <h2>O ID do Participante é {participanteId}
    </h2>
    </>
  );
}