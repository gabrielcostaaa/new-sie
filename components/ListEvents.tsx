import { Award, Album, UserRoundCheck, Clock, Calendar } from 'lucide-react'
import Link from 'next/link'
import { ListEventsProps, brasoes } from "@/types"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

  export default function ListEvents( { events }: ListEventsProps) {
  return (
    <Card className="w-full max-w-md rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl">
      <div className="relative">
        <img
          src={events.event_image}
          alt="Event Image"
          width="400"
          height="240"
          className="w-full h-60 object-cover"
          style={{ aspectRatio: "400/240", objectFit: "cover" }}
        />
        <div
          className={`absolute top-4 left-4 inline-flex items-center gap-2 px-2 py-1 rounded-full ${
            events.event_declaration === 1
              ? "bg-declaracao-gradient"
              : "bg-certificado-gradient"
          } text-primary-foreground text-xs font-medium`}
        >
          {events.event_declaration === 1 ? (
            <Album className="w-4 h-4" />
          ) : (
            <Award className="w-4 h-4" />
          )}
          {events.event_declaration === 1 ? "Declaração" : "Certificado"}
        </div>
      </div>
      <div className="p-6 bg-background">
        <h3 className="text-xl font-bold mb-1 truncate">{events.event_title}</h3>
        <p className="text-muted-foreground text-sm mb-4 truncate">{events.event_description}</p>
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-muted-foreground" />
            <p className="text-muted-foreground text-sm">{events.event_start_date}</p>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-muted-foreground" />
            <p className="text-muted-foreground text-sm">{events.event_start_time}</p>
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
        <div className={`flex items-center gap-2 text-sm ${events.event_num_registrations === events.event_max_registrations ? "text-red-500" : "text-green-600"}`}>
          <UserRoundCheck className="w-5 h-5" />
          <span className="text-sm">
            {events.event_num_registrations} / {events.event_max_registrations} Participantes
          </span>
        </div>
          <Link href={`/admin/evento/${events.event_id}`} passHref>
            <Button variant="outline" size="sm">
              Detalhes
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  )
}

// export default function ListEvents( { events }: ListEventsProps) {
//     return (
//       <div className="rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl">
//       <img
//         src={events.event_image}
//         width={600}
//         height={400}
//         alt="Event Image"
//         className="w-full h-48 object-cover"
//       />
//       <div className="p-4 bg-background">
//         <div className="flex items-center justify-between mb-2">
//           <span className="text-sm text-muted-foreground">{events.event_start_date}</span>
//           <div className={`inline-flex items-center gap-2 px-2 py-1 rounded-full ${events.event_declaration === 1 ? 'bg-declaracao-gradient' : 'bg-certificado-gradient'} text-primary-foreground text-xs font-medium`}>
//           {events.event_declaration === 1 ? <Album className="w-4 h-4" /> : <Award className="w-4 h-4" />}
//           {events.event_declaration === 1 ? 'Declaração' : 'Certificado'}
//         </div>
//         </div>
//         <h3 className="text-lg font-semibold">{events.event_title}</h3>
//         <p className="text-muted-foreground text-sm">
//           {events.event_description}
//         </p>
//       </div>
//     </div>
//     )
//   }