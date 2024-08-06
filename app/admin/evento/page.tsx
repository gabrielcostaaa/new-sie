'use client'

import { useEffect, useState } from 'react';
import ListEvents from "@/components/ListEvents";
import events from "@/app/data/constants/events";
import { getAllEvents } from '@/backend/evento/RepositorioEvento';

export default function Evento() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const fetchedEvents = await getAllEvents();
        console.log("Eventos recebidos:", fetchedEvents); // Verifica o que está sendo recebido
        setEvents(fetchedEvents);
      } catch (error) {
        console.error("Erro ao buscar eventos:", error);
      }
    }

    fetchEvents();
  }, []);

  return (
    <>
        <section className="w-full py-12 md:py-24 lg:py-5">
        <div className="container grid gap-8 px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {events.map(evento => ( 
            <ListEvents key={evento.event_id} events={evento}/>
          ))}
          </div>
        </div>
      </section>
    </>
  );
}