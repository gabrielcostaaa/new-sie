import EventDetails from '@/components/EventDetails'
import { getEventById } from '@/backend/evento/RepositorioEvento';

type Props = {
    params: {
        eventoId: number;
    };
};

export default async function EventoDetalhes({ params: { eventoId } }: Props) {
  const event_id = Number(eventoId);
  const event = await getEventById(event_id);

  console.log(event)

  if (!event) {
    return <p>Evento não encontrado</p>;
  }

  return (
    <div className="h-screen">
      <EventDetails event={event}/>
    </div>
  );
}