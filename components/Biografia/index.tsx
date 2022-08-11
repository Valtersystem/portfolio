import SectionTitle from '../SectionTitle';
import BiografiaItem   from './BiografiaItem';
import { Container } from './styles';



export function Biografia() {
  return (
    <Container>
     <SectionTitle title='#SOBRE MIM' description='' />

     <section>
        <BiografiaItem
        description= {<span>
         
         Prazer em te conhecer, meu nome é Valter Santos. ⁠Antes de me apaixonar por programação computacional, trabalhei em um dos mais importante Hospital Oncológico do Brasil (Hospital de Amor Barretos, localizado na cidade de Barretos no Estado de São Paulo), como desenvolvedor de bancos de dados utilizando a Plataforma REDCap e fotógrafo científico. Como sempre tive quiz aprender a criar web-sites, comecei a pesquisar e me aprofundar no mundo da tecnologia e, então iniciei a graduação em Análise e Desenvolvimento de Sistemas tendo finalizado em 12/2021. Em 2022 tive a primeira oportunidade de trabalhar como Desenvolvedor Web Junior por 6 meses, onde consegui experiência com algumas ferramentas, tais como: Vuejs, Git, Bootstrap, JavaScript e outras. ⁠ <br/> ⁠
No âmbito pessoal, gosto de jogar futebol, cozinhar e também de me divertir com amigos e familiares e às vezes assisto a algumas séries.

         </span>}
        />
     </section>
    </Container>
  );
}

export default Biografia;
