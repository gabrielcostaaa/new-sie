import EventDetails from '@/components/EventDetails';
import { getEventById } from '@/backend/evento/RepositorioEvento';
import { getServerSession } from 'next-auth';
import { findUserProfile } from '@/backend/usuario/RepositorioUsuario';

type Props = {
    params: {
        eventoId: number;
    };
    searchParams: {
        status?: string;
    };
};

export default async function EventoDetalhes({ params: { eventoId }, searchParams }: Props) {

    const session = await getServerSession();
    const userId = await findUserProfile(session?.user.email);
    const event_id = Number(eventoId);
    const infoEvent = await getEventById(event_id, session?.user.email);


    const status = searchParams.status

    return (
        <div className="h-screen">
            <EventDetails event={infoEvent.event} id={event_id} user={userId?.user_id} registration={infoEvent.registration} status={status} />
        </div>
    );
}

