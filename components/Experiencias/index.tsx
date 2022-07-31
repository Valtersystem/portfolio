import SectionTitle from '../SectionTitle';
import ExperienciaItem   from './ExperienciaItem';
import { Container } from './styles';



export function Experiencias() {
  return (
    <Container>
     <SectionTitle title='#05 anos' description='de experiência' />

     <section>
        <ExperienciaItem
        year='2021'
        title='Dev Front-end'
        description='Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        />
        <ExperienciaItem
        year='2021'
        title='Dev Front-end'
        description='Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        />
        <ExperienciaItem
        year='2021'
        title='Dev Front-end'
        description='Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        />
        <ExperienciaItem
        year='2021'
        title='Dev Front-end'
        description='Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        />
     </section>
    </Container>
  );
}

export default Experiencias;
