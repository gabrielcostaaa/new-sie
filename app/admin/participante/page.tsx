'use client'

import { useEffect, useState } from 'react';
import ListUsers from "@/components/ListUsers";
import { getAllParticipants } from '@/backend/usuario/RepositorioUsuario';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function Participantes() {
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchParticipants() {
      try {
        const fetchedParticipants = await getAllParticipants();
        console.log("Participantes recebidos:", fetchedParticipants);
        setParticipants(fetchedParticipants);
        setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar participantes:", error);
    }
  }

  fetchParticipants();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }


  return (
    <>
    <ListUsers users={participants}/>
    </>
  );
}