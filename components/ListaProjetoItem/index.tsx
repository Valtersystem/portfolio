import Link from 'next/dist/client/link';
import { Container } from './styles';

interface ListaProjetoItemProps {
  title: string;
  type: string;
  imgUrl : string;
  slug: string;
}

export function ListaProjetoItem ({ title, type, imgUrl, slug }: ListaProjetoItemProps) {
  return (
    <Container imgUrl={imgUrl}  >
     <Link href={`/projetos/${slug}`}>
      <a>
        <div className="overlay" />
          <section>
            <h1>{title}</h1>
            <h2>{type}</h2>
          </section>
      </a>
     </Link>
     
    </Container>
  );
}

export default ListaProjetoItem;