import { Button } from "@/components/ui/button";
import ListEvents from "@/components/ListEvents";

const events: Events[] = [
  {
    "id": 1,
    "nameEvent": "Ciclo de Formação Conselho Tutelar - 2ª Etapa",
    "subtitleEvent": 'É um evento daora participa ae',
    "dateEvent": "17 de Junho de 2024",
    "declaraoEvent": 0,
    "imageEvent": "/Eventos/eventoteste.jpg",
    "municipioEvent": "Chapecó"
  },
  {
    "id": 2,
    "nameEvent": "Workshop de Desenvolvimento Web",
    "subtitleEvent": 'É um evento daora participa ae',
    "dateEvent": "22 de Julho de 2024",
    "declaraoEvent": 1,
    "imageEvent": "/Eventos/eventoteste.jpg",
    "municipioEvent": "São Carlos"
  },
  {
    "id": 1,
    "nameEvent": "Ciclo de Formação Conselho Tutelar - 2ª Etapa",
    "subtitleEvent": 'É um evento daora participa ae',
    "dateEvent": "17 de Junho de 2024",
    "declaraoEvent": 0,
    "imageEvent": "/Eventos/eventoteste.jpg",
    "municipioEvent": "Chapecó"
  },
  {
    "id": 2,
    "nameEvent": "Workshop de Desenvolvimento Web",
    "subtitleEvent": 'É um evento daora participa ae',
    "dateEvent": "22 de Julho de 2024",
    "declaraoEvent": 1,
    "imageEvent": "/Eventos/eventoteste.jpg",
    "municipioEvent": "São Carlos"
  },
  {
    "id": 1,
    "nameEvent": "Ciclo de Formação Conselho Tutelar - 2ª Etapa",
    "subtitleEvent": 'É um evento daora participa ae',
    "dateEvent": "17 de Junho de 2024",
    "declaraoEvent": 0,
    "imageEvent": "/Eventos/eventoteste.jpg",
    "municipioEvent": "Chapecó"
  },
  {
    "id": 2,
    "nameEvent": "Workshop de Desenvolvimento Web",
    "subtitleEvent": 'É um evento daora participa ae',
    "dateEvent": "22 de Julho de 2024",
    "declaraoEvent": 1,
    "imageEvent": "/Eventos/eventoteste.jpg",
    "municipioEvent": "São Carlos"
  },
  {
    "id": 1,
    "nameEvent": "Ciclo de Formação Conselho Tutelar - 2ª Etapa",
    "subtitleEvent": 'É um evento daora participa ae',
    "dateEvent": "17 de Junho de 2024",
    "declaraoEvent": 0,
    "imageEvent": "/Eventos/eventoteste.jpg",
    "municipioEvent": "Chapecó"
  },
  {
    "id": 2,
    "nameEvent": "Workshop de Desenvolvimento Web",
    "subtitleEvent": 'É um evento daora participa ae',
    "dateEvent": "22 de Julho de 2024",
    "declaraoEvent": 1,
    "imageEvent": "/Eventos/eventoteste.jpg",
    "municipioEvent": "São Carlos"
  }
]

export default function Evento() {
  return (
    <>
        <section className="w-full py-12 md:py-24 lg:py-5">
        <div className="container grid gap-8 px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {events.map(evento => ( 
            <ListEvents key={evento.id} events={evento}/>
          ))}
          </div>
        </div>
      </section>
    </>
  );
}