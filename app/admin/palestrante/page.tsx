'use client'

import { useEffect, useState } from 'react';
import ListUsers from "@/components/ListUsers";
import { getAllSpeakers } from '@/backend/usuario/RepositorioUsuario';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function Palestrante() {
  const [speakers, setSpeakers] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
    async function fetchSpeakers() {
      try {
        const fetchedSpeakers = await getAllSpeakers();
        console.log("Palestrantes recebidos:", fetchedSpeakers); // Verifica o que está sendo recebido
        setSpeakers(fetchedSpeakers);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar palestrantes:", error);
      }
    }

    fetchSpeakers();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <ListUsers users={speakers} />
    </>
  );
}
