"use client"

import React, { useState } from 'react'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { ListUsersProps } from "@/types"
import brasoes from '@/app/data/constants/brasoes'
import PaginationUsers from "@/components/PaginationUsers"

const ITEMS_PER_PAGE = 9

export default function ListUsers({ users }: ListUsersProps) {
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

    return (
      <>
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
              <TableRow key={user.id} className='cursor-pointer'>
                <TableCell className="flex items-center gap-x-4 font-medium">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{user.name ? user.name.charAt(0) : 'JD'}</AvatarFallback>
                  </Avatar>
                  <span>{user.name}</span>
                </TableCell>
                <TableCell>{user.cpf}</TableCell>
                <TableCell className="flex items-center gap-x-4">
                  <img src={brasoes[user.municipio]} alt={`${user.municipio} brasão`} className="h-6 w-6" />
                  <span>{user.municipio}</span>
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