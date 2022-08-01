import SectionTitle from '../SectionTitle';
import BiografiaItem   from './BiografiaItem';
import { Container } from './styles';



export function Biografia() {
  return (
    <Container>
     <SectionTitle title='#SOBRE MIM' description='' />

     <section>
        <BiografiaItem
        description='Fascinado por tecnologia estou terminando minha graduação em análise e desenvolvimento de sistemas. Tenho experiência em HTML, CSS, JavaScript, com foco em desenvolvimento Front-end. Logo após um longo período trabalhando como fotógrafo científico, estou atualmente trabalhando como Desenvolvedor Jr., onde tenho trabalhado duro para aprimorar minhas habilidades com JS, VueJS e Word Press. Estou constantemente aprendendo e ansioso para me tornar um excelente Full Stack Developer, há muito o que aprender e minha jornada está apenas começando!
        '
        />
     </section>
    </Container>
  );
}

export default Biografia;
