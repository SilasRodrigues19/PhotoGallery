import * as C from './styles';

type Props = {
  url: string;
  name: string;
  onDelete: (name: string) => void;
}

export const PhotoItem = ({ url, name, onDelete }: Props) => {
  return (
    <C.Container>
      <img src={url} alt={name} />
      {name.includes('-') ? `Título da imagem ${Math.floor(Math.random() * 1000)}` : name}
      <button onClick={() => {
        onDelete(name)

      }

      }>Deletar</button>


    </C.Container>
  );
}