import React from 'react';
import Sidebar, { SidebarItem } from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import { LayoutDashboard, Presentation, MicVocal, UsersRound, ClipboardList, HousePlus, LogOut, Users } from 'lucide-react'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"

export default function AdminLayout({ children }) {

  return (
    <div className='h-screen flex flex-col'>
      <Navbar />
      <div className='flex flex-1 overflow-hidden'>
        <Sidebar>
          <SidebarItem
            icon={<LayoutDashboard size={30}/>}
            text="Menu Principal"
            caminho="/admin"
          />
          <SidebarItem
            icon={<Presentation size={30}/>}
            text="Eventos"
            caminho="/admin/evento"
            alert
          />
          <SidebarItem
            icon={<MicVocal size={30}/>}
            text="Palestrantes"
            caminho="/admin/palestrante"
          />
          <SidebarItem
            icon={<UsersRound size={30}/>}
            text="Participantes"
            caminho="/admin/participante"
            alert
          />
          <SidebarItem
            icon={<ClipboardList size={30}/>}
            text="Relatórios"
            caminho="/admin/relatorio"
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