import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin } from 'lucide-react'
import { ListCardTicketsProps, brasoes } from "@/types"
import MyQRCode from '@/components/MyQRCode';
import MyQRCodeScanner from '@/components/MyQRCodeScanner';



export default function CardTicket( { tickets }: ListCardTicketsProps) {
  return (
<Card className="w-full max-w-md">
  <img src={tickets.imageEvent} alt="Event Photo" className="rounded-t-lg object-cover aspect-[2/1]" />
  <CardContent className="p-6 flex flex-col gap-4">
    <div className="space-y-2">
      <h3 className="text-xl font-semibold">{tickets.nameEvent}</h3>
      <div className="flex items-center gap-2 text-muted-foreground">
        <Calendar className="w-5 h-5" />
        <span>{tickets.dateEvent}</span>
        <Clock className="w-5 h-5" />
        <span>{tickets.timeEvent}</span>
      </div>
      <div className="flex items-center gap-2 text-muted-foreground">
        <MapPin className="w-5 h-5" />
        <span>{tickets.localEvent}</span>
        <img src={brasoes[tickets.municipioEvent]} className="h-6 w-6" />
      </div>
    </div>
    <div className="flex justify-center mb-6 mt-6">
      <div className="flex justify-center items-center w-32 h-32">
        <MyQRCode value={tickets.qrValue} size={128} /> {/* Ajuste o valor para controlar o tamanho */}
      </div>
    </div>
    <div className="flex flex-col gap-2">
      <Button className="w-full">Imprimir Ingresso</Button>
      <Button variant="outline" className="w-full">Contatar o Organizador</Button>
    </div>
  </CardContent>
</Card>

  )
}