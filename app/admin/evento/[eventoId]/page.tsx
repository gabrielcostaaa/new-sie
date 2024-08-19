import EventDetails from '@/components/EventDetails'
import { getEventById } from '@/backend/evento/RepositorioEvento';
import { getServerSession } from 'next-auth';

type Props = {
    params: {
        eventoId: number;
    };
};

export default async function EventoDetalhes({ params: { eventoId } }: Props) {

  const session = await getServerSession()

  const userId : number = 2

  const event_id = Number(eventoId);
  const event = await getEventById(event_id);

  if (!event) {
    return <p>Evento não encontrado</p>;
  }

  return (
    <div className="h-screen">
      <EventDetails event={event} id={event_id} user={userId}/>
    </div>
  );
}