import ListEvents from "@/components/ListEvents";
import events from "@/app/data/constants/events";

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