import { Award, Album, UserRoundCheck, Clock, Calendar } from 'lucide-react';
import Link from 'next/link';
import { ListEventsProps } from "@/types";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import EvaluateEvent from './EvaluateEvent';
import { getServerSession } from 'next-auth';
import { GetServerSideProps } from 'next';
import { findUserProfile } from '@/backend/usuario/RepositorioUsuario';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context); // Passando o contexto
  const profile = await findUserProfile(session?.user.email);
  // Retorne as props que você precisa, incluindo a sessão ou outros dados necessários
  return { props: { profile } }; // Retornando um objeto com "props"
}

export default function ListEvents({ events, option, session }: ListEventsProps) { // Desestruturando session aqui

  if (events.eventStatus === option) {
    return (
      <Card className="w-full max-w-md rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl animate-fade-up animate-once animate-duration-[950ms] animate-ease-in-out animate-normal animate-fill-forwards">
        <div className="relative">
          <Image
            src={events.event_image} // Corrigido
            alt="Event Image"
            width={400}
            height={240}
            className="w-full h-60 object-cover"
            style={{ aspectRatio: "400/240", objectFit: "cover" }}
          />
          {events.event_conclusion == 1 && <EvaluateEvent event_id={events.event_id} />}
          <div
            className={`absolute top-4 left-4 inline-flex items-center gap-2 px-2 py-1 rounded-full ${
              events.event_declaration === 1
                ? "bg-declaracao-gradient"
                : "bg-certificado-gradient"
            } text-primary-foreground text-xs font-medium`}
          >
            {events.event_declaration === 1 ? (
              <Album className="w-4 h-4" />
            ) : (
              <Award className="w-4 h-4" />
            )}
            {events.event_declaration === 1 ? "Declaração" : "Certificado"}
          </div>
        </div>
        <div className="p-6 bg-background">
          <h3 className="text-xl font-bold mb-1 truncate">{events.event_title}</h3>
          <p className="text-muted-foreground text-sm mb-4 truncate">{events.event_description}</p>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-muted-foreground" />
              <p className="text-muted-foreground text-sm">{events.event_start_date}</p>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-muted-foreground" />
              <p className="text-muted-foreground text-sm">{events.event_start_time}</p>
            </div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className={`flex items-center gap-2 text-sm ${
              events.eventStatus === "Evento Encerrado"
                ? "text-muted-foreground"
                : events.event_num_registrations === events.event_max_registrations
                ? "text-red-500"
                : "text-green-600"
              }`}>
              <UserRoundCheck className="w-5 h-5" />
              <span className="text-sm">
                {events.event_num_registrations} / {events.event_max_registrations} Participantes
              </span>
            </div>
            <Link href={`/admin/evento/${events.event_id}?status=${events.registrationStatus}`} passHref>
              <Button variant="outline" size="sm">
                Detalhes
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    );
  } else {
    return null;
  }
}

