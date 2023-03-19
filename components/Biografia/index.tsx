import SectionTitle from '../SectionTitle';
import BiografiaItem   from './BiografiaItem';
import { Container } from './styles';



export function Biografia() {
  return (
    <Container>
     <SectionTitle title='#About me' description='' />

     <section>
        <BiografiaItem
        description= {<span>
         
         Graduated in Systems Analysis and Development, technology lover, self-taught and passionate about making processes easier, always studying and evolving.

         </span>}
        />
     </section>
    </Container>
  );
}

export default Biografia;
