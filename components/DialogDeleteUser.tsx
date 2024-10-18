import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose,
  } from "@/components/ui/dialog"; // Componentes do Dialog do ShadCN UI
  import { Button } from "./ui/button";
  import { Trash2 } from "lucide-react";
  
  export function DialogDeleteUser() {
    return (
      <Dialog>
        {/* Trigger para abrir o Dialog */}
        <DialogTrigger asChild>
          <Button className="bg-destructive hover:bg-destructive">
            <Trash2 /> Deletar Usuário
          </Button>
        </DialogTrigger>
  
        {/* Conteúdo do Dialog */}
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Tem certeza que deseja deletar o usuário?</DialogTitle>
            <DialogDescription>
              Essa ação não poderá ser desfeita. Todos os dados do usuário serão
              permanentemente removidos.
            </DialogDescription>
          </DialogHeader>
  
          <DialogFooter className="flex justify-end gap-4">
            {/* Botão de Cancelar */}
            <DialogClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DialogClose>
  
            {/* Botão de Confirmar Delete */}
            <Button
              className="bg-destructive hover:bg-destructive"
              onClick={() => {
                console.log("Usuário deletado!"); // Função de deletar usuário aqui
              }}
            >
              Confirmar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }
  