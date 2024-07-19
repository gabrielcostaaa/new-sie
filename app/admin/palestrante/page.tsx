import { Button } from "@/components/ui/button";
import ListUsers from "@/components/ListUsers";
import FilterUsers from "@/components/FilterUsers"
//<h1>Aqui a página da listagem de todos os Palestrantes para o Admin</h1>
//<h2>Onde ele tera uma listagem de todos os palestrantes do sistema, possibilitando cadastrar e filtrar também</h2>
const users: User[] = [
  {
    "id": 1,
    "name": "Gabriel Costa",
    "cpf": "880.201.930-49",
    "municipio": "Chapecó",
    "avatar": "/Avatares/gabriel-costa.jpeg"
  },
  {
    "id": 2,
    "name": "Dieini Carla Ferreira",
    "cpf": "133.664.889-99",
    "municipio": "União do Oeste",
    "avatar": null
  },
  {
    "id": 3,
    "name": "Carlos Silva",
    "cpf": "123.456.789-00",
    "municipio": "Águas de Chapecó",
    "avatar": null
  },
  {
    "id": 4,
    "name": "Ana Paula",
    "cpf": "987.654.321-00",
    "municipio": "Águas Frias",
    "avatar": null
  },
  {
    "id": 5,
    "name": "Bruno Almeida",
    "cpf": "456.123.789-00",
    "municipio": "Arvoredo",
    "avatar": null
  },
  {
    "id": 6,
    "name": "Mariana Souza",
    "cpf": "321.654.987-00",
    "municipio": "Caxambu do Sul",
    "avatar": null
  },
  {
    "id": 7,
    "name": "Felipe Santos",
    "cpf": "789.123.456-00",
    "municipio": "Cordilheira Alta",
    "avatar": null
  },
  {
    "id": 8,
    "name": "Lucas Ferreira",
    "cpf": "654.321.987-00",
    "municipio": "Coronel Freitas",
    "avatar": null
  },
  {
    "id": 9,
    "name": "Juliana Mendes",
    "cpf": "789.456.123-00",
    "municipio": "Formosa do Sul",
    "avatar": null
  },
  {
    "id": 10,
    "name": "Ricardo Lima",
    "cpf": "987.123.654-00",
    "municipio": "Guatambu",
    "avatar": null
  },
  {
    "id": 11,
    "name": "Patrícia Costa",
    "cpf": "456.789.123-00",
    "municipio": "Jardinópolis",
    "avatar": null
  },
  {
    "id": 12,
    "name": "André Oliveira",
    "cpf": "123.789.456-00",
    "municipio": "Nova Erechim",
    "avatar": null
  },
  {
    "id": 13,
    "name": "Renata Pereira",
    "cpf": "654.987.321-00",
    "municipio": "Nova Itaberaba",
    "avatar": null
  },
  {
    "id": 14,
    "name": "Tiago Rocha",
    "cpf": "321.987.654-00",
    "municipio": "Paial",
    "avatar": null
  },
  {
    "id": 15,
    "name": "Laura Martins",
    "cpf": "789.654.123-00",
    "municipio": "Pinhalzinho",
    "avatar": null
  },
  {
    "id": 16,
    "name": "Gabriela Lima",
    "cpf": "123.654.789-00",
    "municipio": "Planalto Alegre",
    "avatar": null
  },
  {
    "id": 17,
    "name": "João Pedro",
    "cpf": "456.321.789-00",
    "municipio": "Santiago do Sul",
    "avatar": null
  },
  {
    "id": 18,
    "name": "Camila Ferreira",
    "cpf": "987.456.123-00",
    "municipio": "São Carlos",
    "avatar": null
  },
  {
    "id": 19,
    "name": "Rafael Souza",
    "cpf": "321.123.654-00",
    "municipio": "Serra Alta",
    "avatar": null
  },
  {
    "id": 20,
    "name": "Fernanda Almeida",
    "cpf": "654.789.321-00",
    "municipio": "Sul Brasil",
    "avatar": null
  }
];


export default function Palestrante() {
  return (
    <>
    <FilterUsers/>
    <ListUsers users={users}/>
    </>
  );
}