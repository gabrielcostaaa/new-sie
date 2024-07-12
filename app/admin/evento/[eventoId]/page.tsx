import { Button } from "@/components/ui/button";

type Props = {
    params: {
        eventoId: string;
    };
};

export default function EventoDetalhes({ params: { eventoId } }: Props) {
  return (
    <>
    <h1>Aqui a página principal da visualização de um Evento específico</h1>
    <h2>O ID do evento é {eventoId}
    </h2>
    </>
  );
}