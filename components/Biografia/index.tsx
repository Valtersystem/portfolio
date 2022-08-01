import SectionTitle from '../SectionTitle';
import BiografiaItem   from './BiografiaItem';
import { Container } from './styles';



export function Biografia() {
  return (
    <Container>
     <SectionTitle title='#SOBRE MIM' description='' />

     <section>
        <BiografiaItem
        description='Prazer em te conhecer, meu nome é Valter Santos.
        ⁠Antes de me apaixonar por programação, trabalhei em um hospital como fotografia científica e sempre tive vontade de aprender a criar web-sites, com esta vontade, comecei a pesquisar e me aprofundar no mundo da tecnologia. E então decidi realizar minha graduação em análise desenvolvimento de sistemas. No ano de 2022 tive a minha primeira oportunidade de trabalhar como desenvolvedor web Júnior por 6 meses, onde consegui experiência com algumas ferramentas: Vuejs, Git, Bootstrap e JavaScript ...
        ⁠
        ⁠Falando um pouco mais sobre mim, gosto de jogar futebol, cozinhar e comer amendoim, e gosto de me divertir com amigos e familiares e às vezes também assisto a algumas séries de zumbi.!
        '
        />
     </section>
    </Container>
  );
}

export default Biografia;
