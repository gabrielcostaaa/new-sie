"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "@/components/ui/select"
import municipios from "@/app/data/constants/municipios"
import { CalendarFold } from 'lucide-react'
import { createEvent } from "@/backend/evento/RepositorioEvento"
import { useState } from 'react'
import format from 'date-fns/format'


export default function Component() {
  const [selectedDate, setSelectedDate] = useState(new Date('2024-07-22T08:00:00'))
  const [selectedTime1, setSelectedTime1] = useState('08:00')
  const [selectedTime2, setSelectedTime2] = useState('08:00')

  const handleDateChange = (date:any) => {
    setSelectedDate(date);
  }

  const handleTimeChange1 = (event1:any) => {
    setSelectedTime1(event1.target.value);
  }
  const handleTimeChange2 = (event2:any) => {
    setSelectedTime2(event2.target.value);
  }

  return (
    <Card className="w-full mx-auto h-full flex flex-col">
      <CardHeader>
        <CardTitle>Criar Evento</CardTitle>
        <CardDescription>Preencha os detalhes do seu evento.</CardDescription>
        <div className="flex justify-end gap-2">
          <Button variant="outline">Cancelar</Button>
          <Button type="submit">Criar Evento</Button>
        </div>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto p-6">
        <form action={createEvent} className="grid gap-6">
          <div className="grid grid-cols-8 gap-6">
            <div className="grid gap-2">
              <Label htmlFor="event_image">Imagem do Evento</Label>
              <Input id="event_image" name="event_image" type="file" />
            </div>
            <div className="grid col-span-2 gap-2">
              <Label htmlFor="event_title">Nome do Evento</Label>
              <Input id="event_title" name="event_title" placeholder="Digite o nome do evento" />
            </div>
            <div className="grid col-span-2 gap-2">
              <Label htmlFor="event_location">Local do Evento</Label>
              <Input id="event_location" name="event_location" placeholder="Digite o nome do local, rua, número e bairro" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="event_city">Município</Label>
              <Select id="event_city" name="event_city">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione a cidade" />
                </SelectTrigger>
                <SelectContent>
                <SelectGroup>
                  {municipios.map(municipio => (
                    <SelectItem key={municipio} value={municipio}>
                      {municipio}
                    </SelectItem>
                  ))}
                </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid col-span-2 gap-2">
            <Label htmlFor="event_partnership">Parcerias</Label>
            <Input id="event_partnership" name="event_partnership" placeholder="Digite parcerias" />
          </div>
          </div>
          <div className="grid grid-cols-6 gap-6">
            <div className="grid col-span-2 gap-2">
              <Label htmlFor="event_description">Descrição do Evento</Label>
              <Textarea id="event_description" name="event_description" rows={4} placeholder="Descreva seu evento" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="start-date">Duração em Dias do Evento</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start font-normal"
                    name="event_start_datetime"
                    id="event_start_datetime"
                  >
                    <CalendarFold className="mr-2 h-4 w-4" />
                    {format(selectedDate, 'dd/MM/yyyy, HH:mm')}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={handleDateChange}
                  />
                </PopoverContent>
              </Popover>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                Hora Inicial e Final do Evento
              </label>
              <div className="grid grid-cols-2 gap-4">
              <input
                type="time"
                id="time"
                name="time"
                value={selectedTime1}
                onChange={handleTimeChange1}
                className="mt-1 block w-full rounded-md border-b border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              <input
                type="time"
                id="time"
                name="time"
                value={selectedTime2}
                onChange={handleTimeChange2}
                className="mt-1 block w-full rounded-md border-b border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              </div>
            </div>
            <div className="grid gap-2">
                <Label htmlFor="reg-start-date">Início e Término das Inscrições</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start font-normal">
                      <CalendarFold className="mr-2 h-4 w-4" />
                      22/07/2024, 08:00
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" defaultDate={new Date("2024-07-22T08:00:00")} />
                  </PopoverContent>
                </Popover>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start font-normal">
                      <CalendarFold className="mr-2 h-4 w-4" />
                      22/07/2024, 17:30
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" defaultDate={new Date("2024-07-22T17:30:00")} />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="grid gap-2">
              <Label htmlFor="max-registrants">Número Máximo de Participantess</Label>
              <Input id="max-registrants" type="number" placeholder="Digite o número máximo de inscritos" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="project-number">Número do Projeto (opcional)</Label>
                <Input id="project-number" placeholder="Digite o número do projeto" />
              </div>
          </div>
          <div className="grid grid-cols-6 gap-6">
            <div className="grid col-span-2 gap-2">
              <Label htmlFor="attachment-info-1">Informações Anexo 1</Label>
              <Textarea id="attachment-info-1" rows={4} placeholder="Digite as informações do anexo" />
            </div>
            <div className="grid col-span-2 gap-2">
              <Label htmlFor="attachment-info-2">Informações Anexo 2</Label>
              <Textarea id="attachment-info-2" rows={4} placeholder="Digite as informações do anexo" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="guidelines">Anexar Orientações</Label>
              <Input id="guidelines" type="file" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="certificate" />
              <label
                htmlFor="certificate"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Emitirá Declaração!
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="conteudo" />
              <label
                htmlFor="conteudo"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Participante escolherá o conteúdo!
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="segment" />
              <label
                htmlFor="segment"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Haverá escolha de segmento!
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="anexo" />
              <label
                htmlFor="anexo"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Documentos Obrigatórios para Anexar!
              </label>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
