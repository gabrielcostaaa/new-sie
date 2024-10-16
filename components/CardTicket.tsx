import { useRouter } from 'next/navigation';
import { useToast } from "@/components/ui/use-toast";
import { deleteRegisterUserEvent } from "@/backend/ingressos/RepositorioIngressos";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from 'lucide-react';
import MyQRCode from '@/components/MyQRCode';
import brasoes from "@/app/data/constants/brasoes";
import { ListCardTicketsProps } from "@/types";
import DownloadTicketPDF from '../components/DownloadTicketPDF';

export default function CardTicket({ tickets, user }: { tickets: any; user: any }) {
  const router = useRouter();
  const { toast } = useToast();
  const { registration_id } = tickets;

  const handleSubmit = async (event) => {
    event.preventDefault(); // Impede o comportamento padrão do formulário

    try {
      await deleteRegisterUserEvent(registration_id, user);

      router.refresh(); // Atualiza a página

      toast({
        title: "Seu ingresso foi cancelado",
        description: "Você efetuou o cancelamento do ingresso!",
        variant: "destructive"
      });
    } catch (error) {
      console.error("Erro ao cancelar o ingresso:", error);
      toast({
        title: "Erro ao cancelar o ingresso",
        description: "Ocorreu um erro ao tentar cancelar seu ingresso. Tente novamente mais tarde.",
        variant: "destructive"
      });
    }
  };

  return (
    <Card className="w-full max-w-sm animate-fade-up animate-once animate-duration-[950ms] animate-ease-in-out animate-normal animate-fill-forwards">
      <div className="relative">
        <img
          src={tickets.event.event_image}
          alt="Event Photo"
          className="rounded-t-lg object-cover aspect-[2/1]"
        />
        <div className="absolute top-2 left-2 inline-flex items-center gap-1 px-1 py-0.5 rounded-full bg-municipios-gradient text-primary-foreground text-[10px] font-medium">
          <img src={brasoes[tickets.event.event_city]} className="h-4 w-4" />
          {tickets.event.event_city}
        </div>
      </div>
      <CardContent className="p-4 flex flex-col gap-2">
        <div className="space-y-1">
          <h3 className="text-base font-semibold truncate">
            {tickets.event.event_title}
          </h3>
          <div className="flex items-center gap-1 text-muted-foreground text-xs">
            <Calendar className="w-4 h-4" />
            <span>{tickets.event.event_start_date} -> {tickets.event.event_end_date}</span>
            <Clock className="w-4 h-4" />
            <span>{tickets.event.event_start_time} -> {tickets.event.event_end_time}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground text-xs">
            <MapPin className="w-4 h-4" />
            <span className="truncate">{`${tickets.event.event_location}, ${tickets.event.event_city}`}</span>
          </div>
        </div>
        <div className="flex justify-center mb-4 mt-4">
          <div className="flex justify-center items-center w-24 h-24">
            <MyQRCode value={tickets.registration_qr_code || ""} size={96} />
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <Button variant="outline" className="w-full text-sm py-2">
            Transferir Ingresso
          </Button>
          <DownloadTicketPDF ticket={tickets} />
        </div>
        <div className="flex flex-row gap-2">
          <Button variant="outline" className="w-3/5 text-sm py-2">
            Contatar o Organizador
          </Button>
          <form onSubmit={handleSubmit}>
            <Button 
              type="submit"
              variant="outline" 
              className="text-sm text-white py-2 bg-destructive hover:bg-red-500 hover:text-white"
            >
              Cancelar Ingresso
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  );
}

