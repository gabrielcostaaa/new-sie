import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from 'lucide-react';
import MyQRCode from '@/components/MyQRCode';
import brasoes from "@/app/data/constants/brasoes";
import { ListCardTicketsProps } from "@/types";

export default function CardTicket({ tickets }: ListCardTicketsProps) {
  return (
    <Card className="w-full max-w-md">
      <div className="relative">
        {/* Acessa a imagem diretamente de tickets */}
        <img src={tickets.event.event_image} alt="Event Photo" className="rounded-t-lg object-cover aspect-[2/1]" />
        <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-2 py-1 rounded-full bg-municipios-gradient text-primary-foreground text-xs font-medium">
          {/* Acessa o brasão e município diretamente de tickets */}
          <img src={brasoes[tickets.event.event_city]} className="h-6 w-6" />
          {tickets.event.event_city}
        </div>
      </div>
      <CardContent className="p-6 flex flex-col gap-4">
        <div className="space-y-2">
          {/* Acessa o título do evento diretamente de tickets */}
          <h3 className="text-xl font-semibold truncate">{tickets.event.event_title}</h3>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-5 h-5" />
            {/* Acessa a data de início do registro diretamente de tickets */}
            <span>{tickets.event.event_registration_start_date}</span>
            <Clock className="w-5 h-5" />
            {/* Acessa o horário de início do registro diretamente de tickets */}
            <span>{tickets.event.event_registration_start_time}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-5 h-5" />
            {/* Acessa o local e a cidade diretamente de tickets */}
            <span className="truncate">{`${tickets.event.event_location}, ${tickets.event.event_city}`}</span>
          </div>
        </div>
        <div className="flex justify-center mb-6 mt-6">
          <div className="flex justify-center items-center w-32 h-32">
            {/* Acessa o QR code diretamente de tickets */}
            <MyQRCode value={tickets.registration_qr_code || ""} size={128} />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Button className="w-full">Imprimir Ingresso</Button>
          <Button variant="outline" className="w-full">Contatar o Organizador</Button>
        </div>
      </CardContent>
    </Card>
  );
}
