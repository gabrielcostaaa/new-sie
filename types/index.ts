import { ReactNode } from 'react'

export interface SidebarItemProps {
    icon: ReactNode
    text: string
    caminho: string
    alert?: boolean
}

export interface User {
    id: Number;
    name: string;
    email: string;
    cpf: string;
    rg: string;
    numerowhatsapp: string;
    nacionalidade: string;
    estado: string;
    municipio: string;
    cargo: string;
    cidadeTrabalho: string;
    entidade: string;
    numeroTrabalho: string;
    avatar: string | null;
}

export interface ListUsersProps {
    users: User[]
}

export interface Tickets {
    id: number;
    nameEvent: string;
    dateEvent: string;
    timeEvent: string;
    localEvent: string;
    imageEvent: string;
    municipioEvent: string;
    qrValue: string;
}

export interface ListCardTicketsProps {
    tickets: Tickets[]
}

export interface Events {
    id: number;
    nameEvent: string;
    subtitleEvent: string;
    dateEvent: string;
    declaraoEvent: Number;
    imageEvent: string;
    municipioEvent: string;
}

export interface ListEventsProps {
    events: Events[]
}


export interface PaginationUsersProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (newPage: number) => void;
  }