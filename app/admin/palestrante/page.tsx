'use client'

import { useEffect, useState } from 'react';
import ListUsers from "@/components/ListUsers";
import FilterUsers from "@/components/FilterUsers";
import { getAllSpeakers } from '@/backend/usuario/RepositorioUsuario';

export default function Palestrante() {
  const [speakers, setSpeakers] = useState([]);

    useEffect(() => {
    async function fetchSpeakers() {
      try {
        const fetchedSpeakers = await getAllSpeakers();
        console.log("Palestrantes recebidos:", fetchedSpeakers); // Verifica o que está sendo recebido
        setSpeakers(fetchedSpeakers);
      } catch (error) {
        console.error("Erro ao buscar palestrantes:", error);
      }
    }

    fetchSpeakers();
  }, []);

  return (
    <>
      <FilterUsers />
      <ListUsers users={speakers} />
    </>
  );
}
