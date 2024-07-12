import { Button } from "@/components/ui/button";
import ListUsers from "@/components/ListUsers";

export default function Palestrante() {
  return (
    <>
    <h1>Aqui a página da listagem de todos os Palestrantes para o Admin</h1>
    <h2>Onde ele tera uma listagem de todos os palestrantes do sistema, possibilitando cadastrar e filtrar também</h2>
    <ListUsers></ListUsers>
    </>
  );
}