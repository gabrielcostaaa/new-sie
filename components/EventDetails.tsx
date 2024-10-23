"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import brasoes from "@/app/data/constants/brasoes"
import Link from "next/link"
import { Award, Album, UserRoundCheck, Clock, Calendar, MapPinned, MessageCircle} from 'lucide-react'
import { registerUserEvent } from "@/backend/ingressos/RepositorioIngressos"
import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'
import Image from "next/image"


export default function Component({ event, id, user, registration }: { event: any; id: any; user: any; registration:any }) {

  const [ticket, setTicket] = useState(false)
  const router = useRouter()
  const {toast} = useToast()
  
  useEffect(() => {
    if (registration?.registration_id) {
      setTicket(true)
    }
  }, [registration])

  const isRegistrationClosed = event.event_num_registrations >= event.event_max_registrations

  const handleSubmit = async (event) => {
    event.preventDefault()
    await registerUserEvent(id, user)

    router.push('/admin/evento')

    toast({
      title: "Inscrição Realizada",
      description: "Você foi inscrito no evento com sucesso!",
    })
  }

  return (
    <div className="h-full w-full animate-fade-down animate-once animate-duration-[950ms] animate-ease-in-out animate-normal animate-fill-forwards">
      <Image
        src={event.event_image}
        alt="Event Image"
        width={1920}
        height={720}
        className="w-full h-[320px] sm:h-[480px] object-cover rounded-sm"
        style={{ aspectRatio: "1920/720", objectFit: "cover" }}
        layout="responsive" // Responsivo para manter a proporção ao redimensionar
      />
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid gap-8">
          <div className="grid gap-4">
            <h1 className="text-2xl sm:text3xl md:text-4xl font-bold">{event.event_title}</h1>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-md text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{event.event_start_date} - {event.event_end_date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{event.event_start_time} - {event.event_end_time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPinned className="h-4 w-4" />
                <span>{event.event_location}, {event.event_city}</span>
                <Image
                  src={brasoes[event.event_city]}
                  alt="City Emblem"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-md text-muted-foreground">
                <div className={`flex items-center gap-2 ${ event.event_num_registrations == event.event_max_registrations ? "text-red-500" : "text-green-600" } `}>
                  <UserRoundCheck className="h-4 w-4" />
                  <span>{event.event_num_registrations} / {event.event_max_registrations} Participantes</span>
                </div>
                <div
                className={` inline-flex items-center gap-2 px-2 py-1 rounded-full ${
                    event.event_declaration === 1
                    ? "bg-declaracao-gradient"
                    : "bg-certificado-gradient"
                } text-primary-foreground text-xs font-medium`}
                >
                {event.event_declaration === 1 ? (
                    <Album className="w-4 h-4" />
                ) : (
                    <Award className="w-4 h-4" />
                )}
                {event.event_declaration === 1 ? "Declaração" : "Certificado"}
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <Button
                  type={isRegistrationClosed || ticket ? "button" : "submit"}
                  size="lg"
                  className={`mt-4 sm:mt-0 ${isRegistrationClosed || ticket ? 'bg-gray-500 text-white cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                  disabled={isRegistrationClosed || ticket}
                >
                  {ticket
                    ? 'Já está inscrito'
                    : isRegistrationClosed
                    ? 'Inscrições Encerradas'
                    : 'Inscrever-se Agora'}
                </Button>
              </form>
            </div>
          </div>
          <Separator className="my-2" />
          <div className="prose overflow-auto max-h-[500px]">
            <p className="whitespace-pre-line">
              {event.event_description}
            </p>
          </div>
          <Separator className="my-2" />
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:underline"
              prefetch={false}
            >
              <MessageCircle className="h-4 w-4" />
              Contatar o Responsável pelo Evento
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
