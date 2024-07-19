import React from 'react';
import Sidebar, { SidebarItem } from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import { LayoutDashboard, Presentation, MicVocal, UsersRound, ClipboardList, HousePlus, Ticket, LogOut, Users } from 'lucide-react'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"

export default function AdminLayout({ children }) {

  return (
    <div className='h-screen flex flex-col'>
      <Navbar />
      <div className='flex flex-1 overflow-hidden'>
        <Sidebar>
          <SidebarItem // ESTE ITEM APARECE PARA TODOS
            icon={<LayoutDashboard size={30}/>}
            text="Menu Principal"
            caminho="/admin"
          />
          <SidebarItem // ESTE ITEM APARECE PARA TODOS
            icon={<Presentation size={30}/>}
            text="Eventos"
            caminho="/admin/evento"
            alert
          />
          <SidebarItem // ESTE ITEM APARECE SOMENTE PARA O ADMINISTRADOR
            icon={<MicVocal size={30}/>}
            text="Palestrantes"
            caminho="/admin/palestrante"
          />
          <SidebarItem // ESTE ITEM APARECE SOMENTE PARA O ADMINISTRADOR
            icon={<UsersRound size={30}/>}
            text="Participantes"
            caminho="/admin/participante"
            alert
          />
          <SidebarItem // ESTE ITEM APARECE SOMENTE PARA O ADMINISTRADOR
            icon={<ClipboardList size={30}/>}
            text="Relatórios"
            caminho="/admin/relatorio"
          />
          <SidebarItem // ESTE ITEM APARECE SOMENTE PARA O ADMINISTRADOR
            icon={<Ticket size={30}/>}
            text="Ingressos"
            caminho="/admin/ingressos"
          />
          <DropdownMenuSeparator />

          <SidebarItem
            icon={<LogOut size={30}/>}
            text="Sair"
          />
        </Sidebar>
        <main className='h-screen w-screen'>
          <section className='p-4'>{children}</section>
        </main>
      </div>
    </div>
  );
}