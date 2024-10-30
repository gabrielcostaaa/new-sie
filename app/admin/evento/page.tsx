'use client'

import { useEffect, useState, useCallback } from 'react';
import ListEvents from "@/components/ListEvents";
import { getAllEvents } from '@/backend/evento/RepositorioEvento';
import NoTickets from '@/components/NoTickets';
import LoadingSpinner from '@/components/LoadingSpinner';
import SelectStatusEvents from '@/components/SelectStatusEvents';

export default function Evento() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const CalcStateEvent = useCallback((event) => {
    const currentDate = new Date();
  
    // Pega as datas de inscrição
    const [eventStartDay, eventStartMonth, eventStartYear] = event.event_registration_start_date.split('/');
    const [eventEndDay, eventEndMonth, eventEndYear] = event.event_registration_end_date.split('/');
    const [eventStartHour, eventStartMinutes] = event.event_registration_start_time.split(':');
    const [eventEndHour, eventEndMinutes] = event.event_registration_end_time.split(':');
  
    // Pega as datas de início e término do evento
    const [startDay, startMonth, startYear] = event.event_start_date.split('/');
    const [endDay, endMonth, endYear] = event.event_end_date.split('/');
    const [startHour, startMinutes] = event.event_start_time.split(':');
    const [endHour, endMinutes] = event.event_end_time.split(':');
  
    // Datas completas de inscrição
    const registrationStartDate = new Date(eventStartYear, eventStartMonth - 1, eventStartDay, eventStartHour, eventStartMinutes);
    const registrationEndDate = new Date(eventEndYear, eventEndMonth - 1, eventEndDay, eventEndHour, eventEndMinutes);
  
    // Datas completas do evento
    const eventStartDate = new Date(startYear, startMonth - 1, startDay, startHour, startMinutes);
    const eventEndDate = new Date(endYear, endMonth - 1, endDay, endHour, endMinutes);
  
    // Define o status das inscrições
    let registrationStatus = '';
    if (currentDate > registrationEndDate) {
      registrationStatus = "Inscrições Encerradas";
    } else if (currentDate >= registrationStartDate && currentDate <= registrationEndDate) {
      registrationStatus = "Inscrições em Andamento";
    } else if (currentDate < registrationStartDate) {
      registrationStatus = "Inscrições Abertas em Breve";
    }
  
    // Define o status do evento
    let eventStatus = '';
    if (currentDate > eventEndDate) {
      eventStatus = "Evento Encerrado";
    } else if (currentDate >= eventStartDate && currentDate <= eventEndDate) {
      eventStatus = "Evento em Andamento";
    } else if (currentDate < eventStartDate) {
      eventStatus = "Evento Futuro";
    }
  
    console.log(`Status do Evento: ${eventStatus}, Status da Inscrição: ${registrationStatus}`);
    
    // Atualiza o estado do evento com o status do evento e o status da inscrição
    setEvents(prevEvents => prevEvents.map(e => 
      e === event ? { ...e, registrationStatus, eventStatus } : e
    ));
    
  }, []);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const fetchedEvents = await getAllEvents();
        console.log("Eventos recebidos:", fetchedEvents);

        setEvents(fetchedEvents);

        // Limita a quantidade de eventos processados (exemplo: 100)
        const limitedEvents = fetchedEvents.slice(0, 100);

        // Usa setTimeout para processar lotes de eventos e evitar bloqueios
        limitedEvents.forEach((event, index) => {
          setTimeout(() => CalcStateEvent(event), index * 50); // Adiciona um pequeno atraso para evitar bloqueios
        });

        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar eventos:", error);
      }
    }

    fetchEvents();
  }, [CalcStateEvent]);
  

  if (loading) {
    return <LoadingSpinner />;
  }

  if (events.length == 0) {
    return <NoTickets name="eventos"/>;
  }


  return (
    <>
        <section className="w-full py-12 md:py-24 lg:py-5 ">
        <div className="container grid gap-8 px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <SelectStatusEvents events={events}/>
          </div>
        </div>
      </section>
    </>
  );
}