import React from 'react';
import Sidebar, { SidebarItem } from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import { LayoutDashboard, Presentation, MicVocal, UsersRound, ClipboardList, Ticket, LogOut } from 'lucide-react'
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";

export default async function  AdminLayout({ children }) {
  const session = await getServerSession()

  if (!session){
    redirect("/")
  }

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
            caminho='/'
          />
        </Sidebar>
        <main className='h-screen w-screen'>
          <section className='p-4'>{children}</section>
        </main>
      </div>
    </div>
  );
}