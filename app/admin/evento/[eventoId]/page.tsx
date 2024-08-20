import EventDetails from '@/components/EventDetails'
import { getEventById } from '@/backend/evento/RepositorioEvento';
import { getServerSession } from 'next-auth';
import { findUserProfile } from '@/backend/usuario/RepositorioUsuario';

type Props = {
    params: {
        eventoId: number;
    };
};

export default async function EventoDetalhes({ params: { eventoId } }: Props) {
    // Configuração do NextAuth para obter a sessão do servidor
    const session = await getServerSession();

    // Verifique a sessão e extraia o user_id
    const userId = await findUserProfile(session?.user.email)

    // Verifique se o eventoId está disponível
    const event_id = Number(eventoId);
    const event = await getEventById(event_id);

    if (!event) {
        return <p>Evento não encontrado</p>;
    }

    return (
        <div className="h-screen">
            <EventDetails event={event} id={event_id} user={userId?.user_id} />
        </div>
    );
}
