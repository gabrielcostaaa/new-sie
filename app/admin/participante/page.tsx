'use client'

import { useEffect, useState } from 'react';
import ListUsers from "@/components/ListUsers";
import FilterUsers from "@/components/FilterUsers";
import { getAllParticipants } from '@/backend/usuario/RepositorioUsuario';

export default function Participantes() {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    async function fetchParticipants() {
      try {
        const fetchedParticipants = await getAllParticipants();
        console.log("Participantes recebidos:", fetchedParticipants);
        setParticipants(fetchedParticipants);
    } catch (error) {
      console.error("Erro ao buscar participantes:", error);
    }
  }

  fetchParticipants();
  }, []);

  return (
    <>
    <FilterUsers/>
    <ListUsers users={participants}/>
    </>
  );
}