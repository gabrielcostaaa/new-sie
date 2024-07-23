"use client"

import MyQRCodeScanner from '@/components/MyQRCodeScanner';
import CardTicket from '@/components/CardTicket';

const tickets: Tickets[] = [
  {
    "id": 1,
    "nameEvent": "Ciclo de Formação Conselho Tutelar - 2ª Etapa",
    "dateEvent": "17 de Junho de 2024",
    "timeEvent": "08h03 - 17h00",
    "localEvent": "Plenário bloco D1 Unochapecó - Chapecó",
    "imageEvent": "/Eventos/eventoteste.jpg",
    "municipioEvent": "Chapecó",
    "qrValue": "T982H-1231"
  },
  {
    "id": 2,
    "nameEvent": "Workshop de Desenvolvimento Web",
    "dateEvent": "22 de Julho de 2024",
    "timeEvent": "09h00 - 17h00",
    "localEvent": "Auditório Principal - São Carlos",
    "imageEvent": "/Eventos/eventoteste.jpg",
    "municipioEvent": "São Carlos",
    "qrValue": "W123X-4567"
  },
  {
    "id": 3,
    "nameEvent": "Feira de Tecnologia 2024",
    "dateEvent": "15 de Agosto de 2024",
    "timeEvent": "10h00 - 18h00",
    "localEvent": "Centro de Convenções - Curitiba",
    "imageEvent": "/Eventos/eventoteste.jpg",
    "municipioEvent": "Cordilheira Alta",
    "qrValue": "R789Y-0123"
  }
]

export default function Ingressos() {
  return (
    <>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <MyQRCodeScanner />
    {tickets.map(ticket => (
        <CardTicket key={ticket.id} tickets={ticket} />
      ))}
    </div>
    </>
  );
}