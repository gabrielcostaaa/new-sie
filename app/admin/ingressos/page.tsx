"use client"

import { getAllRegistrations } from '@/backend/ingressos/RepositorioIngressos';
import CardTicket from '@/components/CardTicket';
import { useEffect, useState } from 'react';
import { getSession } from 'next-auth/react';
import { findUserProfile } from '@/backend/usuario/RepositorioUsuario';
import NoTickets from '@/components/NoTickets';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function Ingressos() {
  const [tickets, setTickets] = useState([]);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTickets() {
      try {
        const session = await getSession();
        const userProfile = await findUserProfile(session?.user.email);
        setUserId(userProfile?.user_id);
        const fetchedTickets = await getAllRegistrations(userProfile?.user_id);
        console.log("Tickets recebidos:", fetchedTickets); // Verifica o que está sendo recebido
        setTickets(fetchedTickets);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar eventos:", error);
      }
    }

    fetchTickets();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (tickets.length == 0) {
    return <NoTickets />;
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {tickets.map(ticket => (
          <CardTicket 
            key={ticket.registration_id} 
            tickets={ticket} 
            user={userId}  // Passa o userId como prop para o componente CardTicket
          />
        ))}
      </div>
    </>
  );
}
