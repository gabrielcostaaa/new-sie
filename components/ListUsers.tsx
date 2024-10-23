"use client"

import React, { useState } from 'react'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { ListUsersProps } from "@/types"
import brasoes from '@/app/data/constants/brasoes'
import PaginationUsers from "@/components/PaginationUsers"
import UserProfile from './UserProfile'
import FilterUsers from '@/components/FilterUsers'
import Image from 'next/image'

const ITEMS_PER_PAGE = 9

export default function ListUsers({ users }: ListUsersProps) {
  
      const [selectedUser, setSelectedUser] = useState(null);
      const [isDetailsUserOpen, setIsDetailsUserOpen] = useState(false);

      const handleUserClick = (user) => {
        setSelectedUser(user);  // Define o usuário selecionado
        setIsDetailsUserOpen(true);   // Abre o modal
      };

      const [currentPage, setCurrentPage] = useState(1);

      // Calcular o índice dos usuários para a página atual
      const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
      const endIndex = startIndex + ITEMS_PER_PAGE;
      const currentUsers = users.slice(startIndex, endIndex);

      // Calcular o número total de páginas
      const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);

      // Função para mudar de página
      const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
      };

      if (isDetailsUserOpen) {
        return (
          <UserProfile user={selectedUser}/>
        )
      }

    return (
      <>
      <FilterUsers />
      <div className="border rounded-lg w-full h-full flex flex-col">
      <div className="overflow-auto flex-grow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Usuário</TableHead>
              <TableHead>CPF</TableHead>
              <TableHead>Município</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentUsers.map((user) => (
              <TableRow key={user.user_id} className='cursor-pointer' onClick={() => handleUserClick(user)}>
                <TableCell className="flex items-center gap-x-4 font-medium animate-fade-right animate-once animate-duration-1000 animate-ease-in-out animate-normal animate-fill-forwards">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.user_avatar} />
                    <AvatarFallback>{user.user_name ? user.user_name.charAt(0) : 'JD'}</AvatarFallback>
                  </Avatar>
                  <span>{user.user_name}</span>
                </TableCell>
                <TableCell className='animate-fade animate-once animate-duration-1000 animate-ease-in-out animate-normal animate-fill-forwards'>{user.user_cpf}</TableCell>
                <TableCell className="flex items-center gap-x-4 animate-fade animate-once animate-duration-1000 animate-ease-in-out animate-normal animate-fill-forwards">
                <Image
                  src={brasoes[user.user_city_work]}
                  alt={`${user.user_city_work} brasão`}
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
                  <span>{user.user_city_work}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      </div>
      <div className="p-4">
        <PaginationUsers 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
      </>
    )
}