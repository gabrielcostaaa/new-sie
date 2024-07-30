'use client'

import { useEffect, useState } from 'react';
import ListUsers from "@/components/ListUsers";
import FilterUsers from "@/components/FilterUsers";
import { getAllUsers } from '@/backend/usuario/RepositorioUsuario'; // Ajuste o caminho conforme a localização do seu arquivo

export default function Palestrante() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const fetchedUsers = await getAllUsers();
        console.log("Usuários recebidos:", fetchedUsers); // Verifica o que está sendo recebido
        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <>
      <FilterUsers />
      <ListUsers users={users} />
    </>
  );
}
