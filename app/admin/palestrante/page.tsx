import ListUsers from "@/components/ListUsers";
import FilterUsers from "@/components/FilterUsers"
import users from '../../data/constants/user'
//<h1>Aqui a página da listagem de todos os Palestrantes para o Admin</h1>
//<h2>Onde ele tera uma listagem de todos os palestrantes do sistema, possibilitando cadastrar e filtrar também</h2>


export default function Palestrante() {
  return (
    <>
    <FilterUsers/>
    <ListUsers users={users}/>
    </>
  );
}