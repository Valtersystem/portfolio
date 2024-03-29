import { ProjetoContainer } from './styles';
import {AiOutlineRightCircle} from 'react-icons/ai'
import Link from 'next/dist/client/link';

interface ProjetoProps{
    title: string;
    type: string;
    slug: string;
    img: string;
}

export default function ProjeItem({title, type, slug, img}: ProjetoProps){
    return(
        <ProjetoContainer imgUrl={img} data-aos='fade-up'>
            <section>
             <div className="overlay" />
             <div className="text">
            <h1># {title}</h1>
             <h2>{type}</h2>
             </div>
            </section>
            <button>
                <Link href={`/projetos/${slug}`}>
               More <AiOutlineRightCircle />
                </Link>
            </button>
        </ProjetoContainer>
        
    )
}
