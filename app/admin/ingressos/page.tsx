"use client"

import { getAllRegistrations } from '@/backend/ingressos/RepositorioIngressos';
import CardTicket from '@/components/CardTicket';
import { useEffect, useState } from 'react';
import { getSession } from 'next-auth/react';
import { findUserProfile } from '@/backend/usuario/RepositorioUsuario';

export default  function Ingressos() {

  const [tickets, setTickets] = useState([])

  useEffect(() => {
    async function fetchTickets() {
      try {
        const session = await getSession()
        const userId = await findUserProfile(session?.user.email)
        const fetchedTickets = await getAllRegistrations(userId?.user_id)
        console.log("Tickets recebidos:", fetchedTickets); // Verifica o que está sendo recebido
        setTickets(fetchedTickets);
      } catch (error) {
        console.error("Erro ao buscar eventos:", error);
      }
    }

    fetchTickets();
  }, []);

  return (
    <>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {tickets.map(ticket => (
        <CardTicket key={ticket.registration_id} tickets={ticket} />
      ))}
    </div>
    </>
  );
}