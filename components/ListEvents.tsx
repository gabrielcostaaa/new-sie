import { Award, Album } from 'lucide-react'
import { ListEventsProps, brasoes } from "@/types"

export default function ListEvents( { events }: ListEventsProps) {
    return (
      <div className="rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl">
      <img
        src={events.imageEvent}
        width={600}
        height={400}
        alt="Event Image"
        className="w-full h-48 object-cover"
      />
      <div className="p-4 bg-background">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">{events.dateEvent}</span>
          <div className={`inline-flex items-center gap-2 px-2 py-1 rounded-full ${events.declaraoEvent === 1 ? 'bg-declaracao-gradient' : 'bg-certificado-gradient'} text-primary-foreground text-xs font-medium`}>
          {events.declaraoEvent === 1 ? <Album className="w-4 h-4" /> : <Award className="w-4 h-4" />}
          {events.declaraoEvent === 1 ? 'Declaração' : 'Certificado'}
        </div>
        </div>
        <h3 className="text-lg font-semibold">{events.nameEvent}</h3>
        <p className="text-muted-foreground text-sm">
          {events.subtitleEvent}
        </p>
      </div>
    </div>
    )
  }