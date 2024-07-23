import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Checkbox } from "@/components/ui/checkbox"

export default function Component() {
  return (
    <Card className="w-full max-w-4xl mx-auto h-screen flex flex-col">
      <CardHeader>
        <CardTitle>Criar Evento</CardTitle>
        <CardDescription>Preencha os detalhes do seu evento.</CardDescription>
        <div className="flex justify-end gap-2">
          <Button variant="outline">Cancelar</Button>
          <Button type="submit">Criar Evento</Button>
        </div>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto p-6">
        <form className="grid gap-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="grid gap-2">
              <Label htmlFor="image">Imagem do Evento</Label>
              <Input id="image" type="file" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="name">Nome do Evento</Label>
              <Input id="name" placeholder="Digite o nome do evento" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Descrição do Evento</Label>
            <Textarea id="description" rows={4} placeholder="Descreva seu evento" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="partnerships">Parcerias</Label>
            <Input id="partnerships" placeholder="Digite parcerias" />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="grid gap-2">
              <Label htmlFor="start-date">Data e Hora de Início</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start font-normal">
                    <CalendarDaysIcon className="mr-2 h-4 w-4" />
                    22/07/2024, 08:00
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar mode="single" defaultDate={new Date("2024-07-22T08:00:00")} />
                </PopoverContent>
              </Popover>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="end-date">Data e Hora de Término</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start font-normal">
                    <CalendarDaysIcon className="mr-2 h-4 w-4" />
                    22/07/2024, 17:30
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar mode="single" defaultDate={new Date("2024-07-22T17:30:00")} />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="grid gap-2">
              <Label htmlFor="location">Local do Evento</Label>
              <Input id="location" placeholder="Digite o local do evento" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="municipality">Município</Label>
              <Input id="municipality" placeholder="Digite o município" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="grid gap-2">
              <Label htmlFor="max-registrants">Máximo de Inscritos</Label>
              <Input id="max-registrants" type="number" placeholder="Digite o número máximo de inscritos" />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="grid gap-2">
                <Label htmlFor="reg-start-date">Início das Inscrições</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start font-normal">
                      <CalendarDaysIcon className="mr-2 h-4 w-4" />
                      22/07/2024, 08:00
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" defaultDate={new Date("2024-07-22T08:00:00")} />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="reg-end-date">Término das Inscrições</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start font-normal">
                      <CalendarDaysIcon className="mr-2 h-4 w-4" />
                      22/07/2024, 17:30
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" defaultDate={new Date("2024-07-22T17:30:00")} />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="project-number">Número do Projeto (opcional)</Label>
            <Input id="project-number" placeholder="Digite o número do projeto" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="guidelines">Anexar Orientações</Label>
            <Input id="guidelines" type="file" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="attachment-info-1">Informações Anexo 1</Label>
            <Textarea id="attachment-info-1" rows={4} placeholder="Digite as informações do anexo" />
          </div>

          <div className="grid gap-4">
            <Checkbox name="certificate" id="certificate">
              Emitir Certificado!
            </Checkbox>
            <Checkbox name="participant-choose" id="participant-choose">
              Participante Escolherá Conteúdo!
            </Checkbox>
            <Checkbox name="segment-choice" id="segment-choice">
              Opção de Segmento Disponível!
            </Checkbox>
            <Checkbox name="mandatory-docs" id="mandatory-docs">
              Documentos Obrigatórios para Anexar!
            </Checkbox>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

function CalendarDaysIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}
