type Props = {
    params: {
        palestranteId: string;
    };
};

export default function PalestranteDetalhes({ params: { palestranteId } }: Props) {
  return (
    <>
    <h1>Aqui a página principal da visualização de um Palestrante específico</h1>
    <h2>O ID do palestrante é {palestranteId}
    </h2>
    </>
  );
}