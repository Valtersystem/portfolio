import { EventEmitter } from 'stream';
import SectionTitle from '../SectionTitle';
import ExperienciaItem   from './ExperienciaItem';
import { Container } from './styles';



export function Experiencias() {

  

  return (
    <Container>
     <SectionTitle title='#Experiências' description='' />

     <section>
        <ExperienciaItem 
        year='2021'
        title='Gestor web'
        description='Fiquei responsável pelo site de eventos do hospital onde eu inseria conteúdos de novos eventos, relatava bugs no site em geral, dava suporte aos clientes, como troca de e-mail, gestão de pagamentos e também participava de reuniões para futuras atualizações do site.'
        />
        <ExperienciaItem
        year='2022'
        title='Dev Front-end Junior'
        description= {<span>Com essa experiência aprendi a trabalhar com Vuejs, Bootstrap, CSS, HTML, PHP, FIGMA e GIT <br />
        <>
        -Criei do zero várias landing pages e emails marketing, para o lançamento de produtos de agropecuári<br />
        -Adicionei formulário de contatos em um web-site que já estava em produção.<br />
        -Criei páginas em wordpress para um blog empresarial.<br />
        -Auxiliei na troca de tecnologia de um e-commerce que estava em knockout js para VueJs.<br />
        -Criei template simples em Bootstrap.<br />
        </>
         </span>}
        />
        
     </section>
    </Container>
  );
}

export default Experiencias;
