import { ReactNode } from 'react'

export const brasoes = {
    "Águas de Chapecó": "/Brasão Municípios Amosc sem fundo/Águas de Chapecó.png",
    "Águas Frias": "/Brasão Municípios Amosc sem fundo/Águas Frias.png",
    "Arvoredo": "/Brasão Municípios Amosc sem fundo/Arvoredo.png",
    "Caxambu do Sul": "/Brasão Municípios Amosc sem fundo/Caxambu do Sul.png",
    "Chapecó": "/Brasão Municípios Amosc sem fundo/Chapecó.png",
    "Cordilheira Alta": "/Brasão Municípios Amosc sem fundo/Cordilheira Alta.png",
    "Coronel Freitas": "/Brasão Municípios Amosc sem fundo/Coronel Freitas.png",
    "Formosa do Sul": "/Brasão Municípios Amosc sem fundo/Formosa do Sul.png",
    "Guatambu": "/Brasão Municípios Amosc sem fundo/Guatambu.png",
    "Jardinópolis": "/Brasão Municípios Amosc sem fundo/Jardinópolis.png",
    "Nova Erechim": "/Brasão Municípios Amosc sem fundo/Nova Erechim.png",
    "Nova Itaberaba": "/Brasão Municípios Amosc sem fundo/Nova Itaberaba.png",
    "Paial": "/Brasão Municípios Amosc sem fundo/Paial.png",
    "Pinhalzinho": "/Brasão Municípios Amosc sem fundo/Pinhalzinho.png",
    "Planalto Alegre": "/Brasão Municípios Amosc sem fundo/Planalto Alegre.png",
    "Santiago do Sul": "/Brasão Municípios Amosc sem fundo/Santiago do Sul.png",
    "São Carlos": "/Brasão Municípios Amosc sem fundo/São Carlos.png",
    "Serra Alta": "/Brasão Municípios Amosc sem fundo/Serra Alta.png",
    "Sul Brasil": "/Brasão Municípios Amosc sem fundo/Sul Brasil.png",
    "União do Oeste": "/Brasão Municípios Amosc sem fundo/União do Oeste.png"
}

export interface SidebarItemProps {
    icon: ReactNode
    text: string
    caminho: string
    alert?: boolean
}

export interface User {
    id: string;
    name: string;
    cpf: string;
    municipio: string;
    avatar: string;
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


export interface PaginationUsersProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (newPage: number) => void;
  }