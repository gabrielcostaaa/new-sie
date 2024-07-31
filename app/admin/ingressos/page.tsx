"use client"

import CardTicket from '@/components/CardTicket';
import tickets from '@/app/data/constants/tickets';

export default function Ingressos() {
  return (
    <>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {tickets.map(ticket => (
        <CardTicket key={ticket.id} tickets={ticket} />
      ))}
    </div>
    </>
  );
}